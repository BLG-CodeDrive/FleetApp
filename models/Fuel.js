const mongoose = require("mongoose");

const FuelSchema = new mongoose.Schema(
  {
    vehicle : { type : String },
    number: { type: String, unique: true },
    type: { type: String },
    image: { type: String },
    fueltype: { type: String },
    quantity: { type: Number },
    refill: { type: String },
    pic: { type: String },
  },

  { timestamps: true }
  
);

module.exports = mongoose.model("Fuel", FuelSchema);