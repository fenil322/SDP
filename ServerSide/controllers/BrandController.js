const Brand=require('../models/brand')
const Influencer=require('../models/influencers')

exports.brandSignUpData=(req, res) => {
    res.send("hello from post");
    const brand=new Brand(req.body);
        console.log(brand);
    brand.save((err, result) => {
        console.log(err);
        
    })
};

exports.getAllBrands = (req, res) => {
    res.send("hello from getallbrand");
    Brand.find({ valid: 1 }).limit(1)
    .then(result => console.log(result));
    
}

