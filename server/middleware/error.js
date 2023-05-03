const ErrorHandler = require("../utils/ErrorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  //Something Wrong with mongoDB id error
  if (err.name === "CastError") {
    const message = `Resource not found with this id.. Invalid ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  //Dublicate key error
  if (err.code === 11000) {
    const message = `Dublicate key ${Object.keys(err.keyValues)} Entered`;
    err = new ErrorHandler(message, 400);
  }

  //Wrong JWT Error
  if (err.name === "JsonWebTokenError") {
    const message = `Your Url is invalid please try again later.`;
    err = new ErrorHandler(message, 400);
  }

  // jwt expired
  if (err.name === "TokenExpiredError") {
    const message = `Yourr Url is expired please try again later.`;
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
