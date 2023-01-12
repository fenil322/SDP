const Influencer=require('../models/influencers')

exports.influencerSignupdata=(req, res) => {
    res.send("hello from post");
    const influencer=new Influencer(req.body);
        console.log(influencer);
    influencer.save((err, result) => {
    })
};