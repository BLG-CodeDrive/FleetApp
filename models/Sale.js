const mongoose = require("mongoose");

const SaleSchema = new mongoose.Schema(
  {
    issueto: { type: String },
    account: { type: String },
    issueby: { type: String },
    item: { type: String },
    orderno: { type: String },
    requestby : { type: String },
    recommendby: { type: String },
    approvedby: { type: String },
  },

  { timestamps: true }
  
);

module.exports = mongoose.model("Sale", SaleSchema);