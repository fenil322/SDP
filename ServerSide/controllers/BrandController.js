const Brand = require('../models/brand')
const Influencer = require('../models/influencers')

exports.brandSignUpData = (req, res) => {
    const {
        uname, shopName, brandType, phone, email, city, state, country,
        address, location, password
    } = req.body;

    if (
        !email ||
        !password ||
        !uname ||
        !brandType ||
        !phone ||
        !shopName ||
        !address || !city || !state || !country ||
        !location
    ) {
        return res.status(422).json({ error: "Please fill all the fields" });
    }
    Brand.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                return res.status(422).json({ error: "Email already exists", success: false });
            }
            //     return bcrypt.hash(req.body.password, 10)
            const brand = new Brand(req.body);
            console.log(brand)
            brand.save((err, result) => { })
            return res.status(200).json({ success: true, message: "Your data is under verification" });


        })
        // .then(hashedpassword => {
        //     // req.body.password = hashedpassword;
        //     return;
        // })
        .catch(err => console.log(err));
};

exports.getAllBrands = (req, res) => {
    res.send("hello from getallbrand");
    Brand.find({ valid: 1 }).limit(1)
        .then(result => console.log(result));

}

exports.brandLogin=(req,res)=>{
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(422).json({ error: "Please add email or password" });
    }
    else {
        Brand.findOne({ email: email, password: password })
            .then(user => {
                console.log("brand found" + user);
                if (!user) {
                    return res.status(422).json({ error: "User not found", success: false });
                }
                else if (user.valid === 0) {
                    return res
                        .status(425)
                        .json({ error: "Verification under process, You can't proceed.", success: false });
                }
                else {
                    return res.status(200).json({ success: true, message: "You are logged in" });

                }
                // bcrypt
                // .compare(password, user.password)
                //     .then(doMatch => {
                //         if (!doMatch) {
                //             return res.status(422).json({ error: "Invalid password" });
                //         }
                //     })
            }).catch((err) => {
                console.log(err);
            });
    }
}