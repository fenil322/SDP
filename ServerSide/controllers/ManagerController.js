const Brand = require('../models/brand')
const Influencer = require('../models/influencers')

exports.getunverifiedbrand = (req, res) => {
    Brand.find({ valid: 0 })
        .then(res => console.log(res))
        .catch(err => console.log(err))

}

exports.getunverifiendInfluencer = (req, res) => {
    Influencer.find({ valid: 0 })
        .then(res => console.log(res))
        .catch(err => console.log(err))

}

exports.validateinfluencer = (req, res) => {
    const { email } = req.body;
    Influencer.findOneAndUpdate(
        { email: email },
        { $set: { valid: 1 } },
        { new: true },
        (err, doc) => {
            if (err) {
                console.log("Something wrong when updating data!");
            } else {
                res.status(200).json(doc);
            }
        }).then(result=>console.log(result))
        .catch((err) => console.log(err))
}

exports.validatebrand = (req, res) => {
    const { email } = req.body;
    Brand.findOneAndUpdate(
        { email: email },
        { $set: { valid: 1 } },
        { new: true },
        (err, doc) => {
            if (err) {
                console.log("Something wrong when updating data!");
            } else {
                res.status(200).json(doc);
            }
        }).then(result=>console.log(result))
        .catch((err) => console.log(err))
}