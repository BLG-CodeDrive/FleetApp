const mongoose = require("mongoose");

const AssetSchema = new mongoose.Schema(
  {
    code: { type: String, unique: true },
    name: { type: String },
    desc: { type: String },
    pic: { type: String },
    value: { type: Number },
    location: { type: String },    
  },

  { timestamps: true }

);

module.exports = mongoose.model("Asset", AssetSchema);