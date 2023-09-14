const { expressjwt: jwt } = require("express-jwt");
const secret  = "secret"

module.exports = authorize;

function authorize(roles = []) {
  if (typeof roles === "string") {
    roles = [roles];
  }
  return [
    jwt({ 
      secret,
      algorithms: ["HS256"],
      }),
    (req, res, next) => {
      if (roles.length && !roles.includes(req.auth.role)) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      next();
    }, 
  ];
}
