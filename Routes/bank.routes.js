const express = require("express");
const AccountModel = require("../Model/bank.model");

const bankRouter = express.Router();

bankRouter.post("/create", async (req, res) => {
  const { Name, DOB, Email, Mobile, Adhar_No, Pan_No } = req.body;
  try {
    const isAcc = await AccountModel.find({ Pan_No: Pan_No });
    if (isAcc.length > 0) {
      res.status(400).send({ Message: "Account Already Exists" });
    } else {
      const newAcc = new AccountModel({
        Name,
        DOB,
        Email,
        Mobile,
        Adhar_No,
        Pan_No,
      });
      await newAcc.save();
      res.status(200).send({ Message: "Account Created Successfully" });
    }
  } catch (error) {}
});

module.exports = bankRouter;
