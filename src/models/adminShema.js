const mongoose = require("mongoose");
const collection = require("../collections/collections");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const admin_Schema = new mongoose.Schema({
  name: String,
  userName: String,
  password: String,
});
const admin_data = mongoose.model(collection.USER_COLLECTION, admin_Schema);

module.exports = { admin_data };
