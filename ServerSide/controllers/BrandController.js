const Brand=require('../models/brand')

exports.brandSignUpData=(req, res) => {
    res.send("hello from post");
    const brand=new Brand(req.body);
        console.log(brand);
    brand.save((err, result) => {
    })
};