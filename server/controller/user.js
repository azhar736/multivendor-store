const express = require("express");
const path = require("path");
const router = express.Router();
const { upload } = require("../multer");
const User = require("../model/user");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const ErrorHandler = require("../utils/ErrorHandler");
const sendMail = require("../utils/sendMail");
const sendToken = require("../utils/jwtToken");
const catchAsyncError = require("../middleware/catchAsyncError");
const { isAuthenticated } = require("../middleware/auth");
router.post("/create-user", upload.single("file"), async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const filename = req.file.filename;
    const userEmail = await User.findOne({ email });
    if (userEmail) {
      const filename = req.file.filename;
      const filePath = `./uploads/${filename}`;
      console.log("The File Path is", filePath);
      fs.unlink(filePath, (err) => {
        if (err) {
          console.log(err);
          res.status(500).json({ message: "Error deleting the file" });
        }
      });
      return next(new ErrorHandler("User already exists", 400));
    }
    const fileUrl = path.join(filename);
    const user = {
      name: name,
      email: email,
      password: password,
      avatar: fileUrl,
    };
    const activationToken = createActivationToken(user);
    const activationUrl = `http://localhost:3000/activation/${activationToken}`;
    try {
      //sending Mail
      await sendMail({
        email: user.email,
        subject: "Activate your account",
        message: `Hello ${user.name}, Please Click the link below to activate your account : ${activationUrl}`,
      });
      res.status(201).json({
        success: true,
        message: `Please check your email:- ${user.email} to activate your account.`,
      });
    } catch (error) {
      console.log("The Error from Internal Try-Catch", error);
      return next(new ErrorHandler(error.message, 500));
    }
  } catch (error) {
    console.log("The Error from External Try-Catch", error);
    return next(new ErrorHandler(error.message, 400));
  }
});

//Create Activation Token
const createActivationToken = (user) => {
  return jwt.sign(user, process.env.ACTIVATION_SECRET, {
    expiresIn: "5m",
  });
};

//activate user
router.post(
  "/activation",
  catchAsyncError(async (req, res, next) => {
    try {
      const { activation_token } = req.body;
      const newUser = jwt.verify(
        activation_token,
        process.env.ACTIVATION_SECRET
      );
      if (!newUser) {
        return next(new ErrorHandler("Invalid Token", 400));
      }
      const { name, email, password, avatar } = newUser;
      let user = await User.findOne({ email });
      if (user) {
        return next(new ErrorHandler("User already exists!", 400));
      }
      user = await User.create({
        name,
        email,
        password,
        avatar,
      });
      sendToken(user, 201, res);
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

//Login User
router.post(
  "/login-user",
  catchAsyncError(async (req, res, next) => {
    try {
      const { email, password } = req.body;
      // console.log(email, password);
      if (!email || !password) {
        return next(new ErrorHandler("Please Provide all the fields!", 400));
      }
      const user = await User.findOne({ email }).select("+password");
      if (!user) {
        return next(new ErrorHandler("User not found!", 400));
      }
      const isValidPassword = await user.comparePassword(password);
      if (!isValidPassword) {
        return next(
          new ErrorHandler("Please provide a valid information!", 400)
        );
      }
      sendToken(user, 201, res);
    } catch (error) {
      console.log(error);
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

//Load User
router.get(
  "/getuser",
  isAuthenticated,
  catchAsyncError(async (req, res, next) => {
    try {
      const user = await User.findById(req.user.id);
      if (!user) {
        return next(new ErrorHandler("User not found!", 400));
      }
      res.status(200).json({ success: true, user });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

//Logout User
router.get("/logout",isAuthenticated,catchAsyncError(async(req,res,next)=>{
  try {
    res.cookie("token",null,{
      expiresIn: new Date(Date.now()),
      httpsOnly: true
    })
    res.status(201).json({success:true,message:"Logout Successfull"});
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
}))
module.exports = router;
