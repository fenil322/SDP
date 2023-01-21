const jwt = require("jsonwebtoken");
const Influencer = require("../models/influencers");

exports.isAuth = async (req, res, next) => {
  if (req.headers && req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];

    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET);

      const user = await Influencer.findById(decode.userId);
      if (!user) {
        return res.json({success: false, message: "JWT TOKEN INVALID"});
      }
      req.user = user;
      next();
    } catch (error) {
      if (error.name === "JsonWebTokenError") {
        res.send({success: false, message: "Unauthorized Access"});
      }
      if (error.name === "TokenExpiredError") {
        res.send({
          success: false,
          message: "Token Expired Try generating new TOKEN",
        });
      }
      res.send({success: false, message: "Session Expired try sign in again"});
    }
  } else {
    res.json({success: false, message: "JWT Token not found "});
  }
};