const express = require("express");
const path = require("path");
const router = express.Router();
const { upload } = require("../multer");
const User = require("../model/user");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const ErrorHandler = require("../utils/ErrorHandler");
const sendMail = require("../utils/sendMail");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const sendToken = require("../utils/jwtToken");
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
        } else {
          res.json({ message: "Successfully deleted the file" });
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
      return next(new ErrorHandler(error.message, 500));
    }
  } catch (error) {
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
  catchAsyncErrors(async (req, res, next) => {
    try {
      const { activation_toke } = req.body;
      const newUser = jwt.verify(
        activation_toke,
        process.env.ACTIVATION_SECRET
      );
      if (!newUser) {
        return next(new ErrorHandler("Invalid Token", 400));
      }
      const { name, email, password, avatar } = newUser;
      await User.create({
        name,
        email,
        password,
        avatar,
      });
      sendToken(newUser, 201, res);
    } catch (error) {}
  })
);

module.exports = router;
