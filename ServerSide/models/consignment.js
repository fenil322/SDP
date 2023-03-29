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

  paymentstatus: {
    type: Number,
    default: 0,
  },
  order_id: {
    type: String,
    default: "",
  },
  Date: {
    type: String,
   
  },
  detailRequest: {
    type: Number
    , default: 0,
  },
  detailSend:{
    type: Number,
    default: 0,
  },
  AgreementDetail: {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    contact:{
      type:Number
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
    adsType: {
      type: String,
      default: "",
    },
    termsAndConditions: {
      type: String,
      default: "",
    },
    Remarks: {
      type: String,
      default: "",
    },
    amount: {
      type: Number,
      default: 0,
    },
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
