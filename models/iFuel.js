const mongoose = require("mongoose");

const iFuelSchema = new mongoose.Schema(
  {
    type: { type: String },
    price: { type: Number},
    store: { type: String },
    capacity: { type: Number },
    location: { type: String },    
  },

  { timestamps: true }

);

module.exports = mongoose.model("iFuel", iFuelSchema);