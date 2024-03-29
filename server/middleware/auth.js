const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncError = require("./catchAsyncError");
const jwt = require("jsonwebtoken");
const User = require("../model/user");
const Shop = require("../model/shop");

exports.isAuthenticated = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;
  //   console.log("the Token is: " + token);
  if (!token) {
    return next(new ErrorHandler("Please Login to Continue..", 401));
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
  req.user = await User.findById(decoded.id);
  next();
});


exports.isSelller = catchAsyncError(async (req, res, next) => {
  const {seller_token} = req.cookies;
  //   console.log("the Token is: " + token);
  if (!seller_token) {
    return next(new ErrorHandler("Please Login as a Seller to Continue..", 401));
  }
  const decoded = jwt.verify(seller_token, process.env.JWT_SECRET_KEY);
  console.log("decoded: ", decoded);
  req.seller = await Shop.findById(decoded.id);
  next();
});
