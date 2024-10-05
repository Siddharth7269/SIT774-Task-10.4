const jwt = require('jsonwebtoken');
const {User}=require('../models');
let blacklist = [];
const deauth=(req,res,next)=>{
  blacklist.push(req.cookies.token);
  next();
}
const authenticate = (req, res, next) => {
  const token =  req.cookies.token; // Get token from cookies
  if (!token || blacklist.includes(token)) {
    return next(); // No token, proceed without user info
  }

  jwt.verify(token, 'sidharthyadav1233455', async (err, decoded) => {
    if (err) {
      return next(); // Invalid token, proceed without user info
    }
    req.user = await User.findByPk(decoded.userId); // Attach user info to request
    next();
  });
};

module.exports = {authenticate,deauth};
