const Influencer = require('../models/influencers')
var id='63c5825341af87b8073eaf87';

exports.influencerSignupdata = (req, res) => {
    res.send("hello from post");
    const influencer = new Influencer(req.body);
    console.log(influencer);
    influencer.save((err, result) => {

    })
};

exports.getAllInfluencer = (req, res) => {
    res.send("hello from getallinfluencer");
    const influencers = Influencer.find({ valid: 1 }).limit(1)
    console.log(influencers.then(result => console.log(result)));
    
}

exports.editProfiledisplay=(req,res)=>{
    res.send("hello from editProfiledisplay");
    Influencer.findById(id)
    .then(res=>console.log(res));
    
}

exports.updateProfile=(req,res)=>{
    Influencer.findByIdAndUpdate(id,{$set:req.body},{new:true})
    .then(result=>console.log(result),(err,doc)=>{
        console.log("error"+err)
    });
    res.send("helo from update");
}

