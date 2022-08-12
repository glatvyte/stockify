const mongoose = require("mongoose");

const selectedCompanySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  // stockHistory: {
  // type: Array,
  //   required: true,
  // },
});

const ViewedCompany = mongoose.model("ViewedCompany", selectedCompanySchema);

module.exports = ViewedCompany;
