const mongoose = require("mongoose");

const VehicleMoveSchema = new mongoose.Schema(
  {
    vehicle: { type: String },
    user: { type: String },
    driver: { type: String },
    origin: { type: String },
    destination: { type: String },
    account : { type: String },
    meterin: { type: Number},
    meterout: { type: Number },
    date: { type: Date },
    desc: { type: String },
  },

  { timestamps: true }

);

module.exports = mongoose.model("VehicleMove", VehicleMoveSchema);