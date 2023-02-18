// const { Double } = require("mongodb");
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const consignmentSchema = new mongoose.Schema({
  brandId: {
    type: ObjectId,
    ref: "Shop",
  },
  influencerId: {
    type: ObjectId,
    ref: "influencer",
  },
  shoprequest: {
    type: Number,
    default: 0,
  },
  influencerrequest: {
    type: Number,
    default: 0
  },

  acceptstatus: {
    type: Boolean,
    default: false,

  },
  Amount: {
    type: Number,
    default: 0,
  },
  paymentstatus: {
    type: Number,
    default: 0,
  },
  order_id: {
    type: String,
    default: "",
  },
  startDate: {
    type: String,
    default: "",
  },
  endDate: {
    type: String,
    default: "",
  },
  review: {
    type: String,
    default: "",
  },
  rating: {
    type: Number,
    default: 0,
  },
});

const consignment = mongoose.model("consignment", consignmentSchema);

module.exports = consignment;
