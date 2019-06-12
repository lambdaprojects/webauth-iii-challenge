module.exports = function(department) {
  return function(req, res, next) {
    console.log("::::::REQ USER DEPT ::::::" + req.user.department);
    if (req.user) {
      if (req.user.department && req.user.department.includes(department)) {
        next();
      } else {
        res.status(403).json({ message: "Can't touch this!" });
      }
    } else {
      res.status(401).json({ message: "You cannot pass!" });
    }
  };
};
