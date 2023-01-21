const mongoose = require("mongoose");
const jwt=require("jsonwebtoken");

const sitemanagerSchema = new mongoose.Schema(
  {
    name: {
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
    resetToken: String,
    expireToken: Date,
    valid: {
      type: Number,
      default: 0
    },
    tokens: [{

      token: {
        type: String,
        // required: true

      }
    }
    ],
  });
  sitemanagerSchema.methods.generateAuthToken = async function () {
  try {
    const newtoken = jwt.sign({ _id: this._id }, "mynameisFenilsavaniandthisisoursdpproject");
    // console.log(newtoken);
    this.tokens = this.tokens.concat({ token: newtoken });
    await this.save();
    return newtoken;
  } catch (err) {
    console.log(err);
    return err;
  }
}
const sitemanager = mongoose.model("sitemanager", sitemanagerSchema);

module.exports = sitemanager;
