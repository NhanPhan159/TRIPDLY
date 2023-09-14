const crypto = require('crypto');

// TODO
function validPassword(password, hash, salt) {
    var validHash = crypto.pbkdf2Sync(password,salt,10000,64,'sha512').toString('hex')
    return hash===validHash
}
function genPassword(password) {
    var salt = crypto.randomBytes(32).toString('hex')
    var genHash = crypto.pbkdf2Sync(password,salt,10000,64,'sha512').toString('hex')
    return {
        salt:salt,
        hash:genHash
    }
}

module.exports.validPassword = validPassword;
module.exports.genPassword = genPassword;