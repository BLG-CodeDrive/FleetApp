const mongoose = require("mongoose");

const GoodsSchema = new mongoose.Schema(
  {

//item --------------------------------------------
    code: { type: String, unique: true },
    name: { type: String },
    desc: { type: String },
    pic: { type: String },
    price: { type: Number },

//WareHouse - Store -----------------------------------
    sname: { type: String },
    slocation: { type: String },
    stype: { type: String },
    real: { type: String },
    
  },

  { timestamps: true }

);

module.exports = mongoose.model("Goods", GoodsSchema);