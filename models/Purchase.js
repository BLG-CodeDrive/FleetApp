const mongoose = require("mongoose");

const PurchaseSchema = new mongoose.Schema(
  {
    purchase: { type: String },
    requireby: { type: String },
    date: { type: Date },
    account: { type: String },
    shipby: { type: String },
    from: { type: String },
    item: { type: String },
    price: { type: Number },
    qty: { type: Number },
    total: { type: Number },
    tax: { type: Number },
    weight: { type: Number },
    toll: { type: String },
    requestby: { type: String },
    porder: { type: String },
    status: { type: String },
    receivedby: { type: String },
  },

  { timestamps: true }

);

module.exports = mongoose.model("Purchase", PurchaseSchema);