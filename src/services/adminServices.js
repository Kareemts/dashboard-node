const { admin_data } = require("../models/adminShema");

const login = async (adminData) => {
  const admin = await admin_data.findOne({
    userName: adminData.userName,
    password: adminData.password,
  });

  if (admin) {
    return {
      admin,
    };
  } else {
    return {
      message: "User name or password is incorrect",
    };
  }
};

const register = async (data) => {
  console.log(data);
  const user = await admin_data.findOne({ userName: data.userName });
  if (user) {
    return {
      message: "user already exists",
    };
  } else {
    const adminData = new admin_data(data);
    const savedData = await adminData.save();
    return {
      signUp: true,
    };
  }
};

module.exports = {
  login,
  register,
};
