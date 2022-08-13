const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const ViewedCompany = require("./models/viewedCompanyProfile");

mongoose
  .connect("mongodb://localhost:27017/stockify", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongo Connection OPENED"))
  .catch((err) => console.log("Mongo Connection FAILED"));

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/selectedCompany", async (req, res) => {
  const viewedCompany = new ViewedCompany(req.body);
  await viewedCompany.save();
  res.send("Company name and stock price history logged");
});

app.listen(3001, () => {
  console.log("Listening on port 3001");
});
