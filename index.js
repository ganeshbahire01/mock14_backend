const express = require("express");
const bankRouter = require("./Routes/bank.routes");
const connection = require("./config/db");
const cors = require("cors");
const app = express();
app.use(express.json());

app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/bank", bankRouter);

app.listen(8080, async (req, res) => {
  try {
    await connection;
    console.log("DB connection established");
  } catch (error) {
    console.log("Error connecting");
  }
  console.log("server is running");
});
