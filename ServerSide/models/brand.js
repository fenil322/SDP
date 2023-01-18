const mongoose = require("mongoose");

const shopSchema = {
  uname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  shopName: {
    type: String,
    required: true,
  },
  brandType: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  location: {
    type:String,
    required: true,
  },
  valid:{
    type:Number,
    default:0,
  },
  photo1: {
    type: String,
    default:"https://bootdey.com/img/Content/avatar/avatar7.png"
  },
  photo2: {
    type: String,
    default:"https://bootdey.com/img/Content/avatar/avatar7.png"
  },
  resetToken: String,
  expireToken: Date,
};

const Shop = mongoose.model("Shop", shopSchema);

module.exports = Shop;
