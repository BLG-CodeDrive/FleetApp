const mongoose = require("mongoose");

const VehicleSchema = new mongoose.Schema(
  {
    number: { type: String, unique: true },
    type: { type: String },
    model: { type: String },
    year: { type: String },
    make: { type: String },
    fueltype: { type: String },
    desc: { type: String },
    image: { type: String },
    avatar: { type: String  },
    
    categories: {
      type: Array
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Vehicle", VehicleSchema);