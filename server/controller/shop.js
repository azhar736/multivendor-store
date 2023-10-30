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
const shop = require("../model/shop");

router.post("/create-shop", upload.single("file"), async (req, res, next) => {
  try {
    const { email } = req.body;
    const sellerEmail = await shop.findOne({ email: email });
    if (sellerEmail) {
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
    const filename = req.file.filename;
    const fileUrl = path.join(filename);
    const seller = {
      name: req.body.name,
      email: email,
      password: req.body.password,
      avatar: fileUrl,
      address:req.body.address,
      phoneNumber: req.body.phoneNumber,
      zipCode: req.body.zipCode,
    };
    const activationToken = createActivationToken(seller);
    const activationUrl = `http://localhost:3000/seller/activation/${activationToken}`;
    try {
        //sending Mail
        await sendMail({
          email: seller.email,
          subject: "Activate your Shop",
          message: `Hello ${seller.name}, Please Click the link below to activate your Shop : ${activationUrl}`,
        });
        res.status(201).json({
          success: true,
          message: `Please check your email:- ${seller.email} to activate your Shop.`,
        });
      } catch (error) {
        console.log("The Error from Internal Try-Catch", error);
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

  //activate Seller
router.post(
    "/shop/activation",
    catchAsyncError(async (req, res, next) => {
      try {
        const { activation_token } = req.body;
        const newSeller = jwt.verify(
          activation_token,
          process.env.ACTIVATION_SECRET
        );
        if (!newUser) {
          return next(new ErrorHandler("Invalid Token", 400));
        }
        const { name, email, password, avatar,address,zipCode,phoneNumber } = newSeller;
        let seller = await User.findOne({ email });
        if (seller) {
          return next(new ErrorHandler("User already exists!", 400));
        }
        seller = await shop.create({
          name,
          email,
          password,
          avatar,
          address,
          zipCode,
          phoneNumber
        });
        sendToken(seller, 201, res);
      } catch (error) {
        return next(new ErrorHandler(error.message, 500));
      }
    })
  );
  

module.exports = router;
