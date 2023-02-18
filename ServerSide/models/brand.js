const mongoose = require("mongoose");
const jwt =require("jsonwebtoken");

const shopSchema =new mongoose.Schema( {
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
  tokens: [{

    token: {
      type: String,
      // required: true

    }
  }
  ],
  description:{
type:String,
  },
  resetToken: String,
  expireToken: Date,
});

shopSchema.methods.generateAuthToken = async function () {
  try {
    const newtoken = jwt.sign({ _id: this._id }, "mynameisFenilsavaniandthisisoursdpproject");
    // console.log(newtoken);
    this.tokens=this.tokens.concat({ token: newtoken });
    await this.save();
    return newtoken;
  } catch (err) {
    console.log(err);
    return err;
  }
}

const Shop = mongoose.model("Shop", shopSchema);

module.exports = Shop;
