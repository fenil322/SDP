const mongoose = require("mongoose");
const jwt=require("jsonwebtoken");
const influencerSchema =new mongoose.Schema ({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    // required: true,
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
  age: {
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
    // required: true,
  },
  photo: {
    type: String,
    default: "https://bootdey.com/img/Content/avatar/avatar7.png",
  },
  instagram: {
    type: String,
    required: true,
  },
  instagramURL: {
    type: String,
    required: true,
  },
  instagramFollowers: {
    type: String,
    required: true,
  },
  instagramEngagementRate: {
    type: String,
    required: true,
  },
  facebook: {
    type: String,
    required: true,
  },
  facebookURL: {
    type: String,
    required: true,
  },
  facebookFollowers: {
    type: String,
    required: true,
  },
  facebookEngagementRate: {
    type: String,
    required: true,
  },
  twitter: String,
  twitterURL: String,
  twitterFollowers: String,
  twitterEngagementRate: String,
  valid: {
    type: Number,
    default: 0,
  },
  rating: {
    type: Number,
    default: 0,
  },
  count: {
    type: Number,
    default: 0,
  },
  tokens: [{

    token: {
      type: String,
      required: true
      
    }
  }
  ],
  resetToken: String,
  expireToken: Date,
});

// influencerSchema.methods.generateAuthToken = async  function () {
//   try {
//     const token =  jwt.sign({ _id: this._id }, "mynameisFenilsavaniandthisisoursdpproject");
//     this.tokens = this.token.concat({ token: token });
//     await this.save();

//     return token;

//   } catch (err) {
//     console.log(err);
//     return err;
//   }
// }
const influencer = mongoose.model("influencer", influencerSchema);

module.exports = influencer;
