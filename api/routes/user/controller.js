const express = require('express');
const router = express.Router();
const userService = require('./services');
const authorize = require('../../auth/authorize') 
const Role = require('../../auth/role');

/** ROUTE */
router.get('/role',authorize(),checkRole)
router.get('/:id', authorize(), getById);
router.post('/login', authenticate);   
router.post('/register',register)

module.exports = router;

/** SETUP FUNCTION */
function checkRole(req,res,next){
    const role = req.auth.role
    res.status(200).json(role)
}

function authenticate(req, res, next) {
    userService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}

function register(req,res,next){
    userService.register(req.body)
    .then(user => user ? res.json(user) : res.status(500).json({ message: 'server is broken' }))
    .catch(err => next(err));
}

function getById(req, res, next) {
    const currentUser = req.auth;
    const id = req.params.id

    if (id !== currentUser.sub && currentUser.role !== Role.admin) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    userService.getById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}