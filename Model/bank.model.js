const mongoose = require("mongoose");

const AccountSchema = mongoose.Schema({
  Name: String,
  Gender: String,
  DOB: String,
  Email: String,
  Mobile: Number,
  Initial_Balance: Number,
  Adhar_No: Number,
  Pan_No: String,
});

const AccountModel = mongoose.model("custmer", AccountSchema);

module.exports = AccountModel;
