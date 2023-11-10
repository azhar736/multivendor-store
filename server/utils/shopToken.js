//Create Token and Saving that in cookies
const sendShopToken = (user, statusCode, res) => {
    const token = user.getJwtToken();
  
    //Options for cookies
    const options = {
      // expires: new Date(Date.now() + 90days*24hours*60*60*1000miliseconds),
      expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };
    res.status(statusCode).cookie("seller_token", token, options).json({
      success: true,
      token,
    });
  };
  
  module.exports = sendShopToken;
   