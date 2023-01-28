const jwt = require("jsonwebtoken");
const Manager = require("../models/manager");
exports.isAuth = async (req, res, next) => {
  try {
    const token = req.cookies.jwtoken;
    const verifytoken = jwt.verify(token, "mynameisFenilsavaniandthisisoursdpproject");

    const rootUser = await Manager.findOne({ _id: verifytoken._id, "tokens.token": token });
    if (!rootUser) { throw new Error("Unauthorized"); }
    else {
      console.log(rootUser);
      req.token = token;
      req.rootUser = rootUser;
      req.userId = rootUser._id;
      // res.status(422).json({ message: "You are already logged in!" });
      next();
    }
  } catch (error) {
    console.log(error);
    if (error == "Unauthorized") {
    return  res.status(422).send({ success: false, error: "Unauthorized Access" });
    }
    if (error.name === "TokenExpiredError") {
    return  res.status(422).send({
        success: false,
        error: "Token Expired Try generating new TOKEN",
      });
    }
   return res.status(422).send({ success: false, error: "Session Expired try sign in again" });

  }

  //   if (req.headers && req.headers.authorization) {
  //     const token = req.headers.authorization.split(" ")[1];

  //     try {
  //       const decode = jwt.verify(token,"mynameisFenilsavaniandthisisoursdpproject");

  //       const user = await Influencer.findById(decode.userId);
  //       if (!user) {
  //         return res.json({success: false, message: "JWT TOKEN INVALID"});
  //       }
  //       req.user = user;
  //       next();
  //     } catch (error) {
  //       if (error.name === "JsonWebTokenError") {
  //         res.send({success: false, message: "Unauthorized Access"});
  //       }
  //       if (error.name === "TokenExpiredError") {
  //         res.send({
  //           success: false,
  //           message: "Token Expired Try generating new TOKEN",
  //         });
  //       }
  //       res.send({success: false, message: "Session Expired try sign in again"});
  //     }
  //   } else {
  //     res.json({success: false, message: "JWT Token not found "});
  //   }
};