const { login } = require("../services/adminServices");

const adminLogin = async (req, res, next) => {
  try {
    if (!req.body) {
      return res.status(500).json({
        status: false,
        message: "Please provide login credentials.",
      });
    } else {
      const adminInfo = await login(req.body.values);

      return res.status(200).json({
        status: true,
        adminInfo,
      });
    }
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

module.exports = {
  adminLogin,
};
