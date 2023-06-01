const { admin_data } = require("../models/adminShema");

const login = async (adminData) => {
  const admin = await admin_data.findOne({
    userName: adminData.userName,
    password: adminData.password,
  });

  console.log(admin);

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

module.exports = {
  login,
};
