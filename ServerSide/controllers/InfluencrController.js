const Influencer = require('../models/influencers')
var id = '63c5825341af87b8073eaf87';
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


exports.influencerSignupdata = (req, res) => {
    const {
        fname, lname, phone, email, city, state, country, password,
        age, instagram, instagramURL, instagramFollowers, instagramEngagementRate,
        facebook, facebookURL, facebookFollowers, facebookEngagementRate,
        twitter, twitterURL, twitterFollowers, twitterEngagementRate
    } = req.body;

    city = city.toLowerCase();

    if (
        !email || !password || !fname || !lname || !phone || !age || !city || !state || !country || !instagram || !instagramURL ||
        !instagramFollowers || !instagramEngagementRate || !facebook || !facebookURL || !facebookFollowers || !facebookEngagementRate
    ) {
        return res.status(422).json({ error: "Please fill all the fields" });
    }
    Influencer.findOne({ email: email })
        .then(user => {
            if (user) {
                return res.status(422).json({ error: "Email already exists", success: false });
            }
            //     return bcrypt.hash(req.body.password, 10)
            const influencer = new Influencer(req.body);
            console.log(influencer)
            influencer.save((err, result) => { })
            return res.status(200).json({ success: true, message: "Your data is under verification" });


        })
        // .then(hashedpassword => {
        //     // req.body.password = hashedpassword;
        //     return;
        // })
        .catch(err => console.log(err));

};


exports.getAllInfluencer = (req, res) => {

    const influencers = Influencer.find({ valid: 1 }).limit(1)
    console.log(influencers.then(result => console.log(result)));

}

exports.editProfiledisplay = (req, res) => {
    res.send("hello from editProfiledisplay");
    Influencer.findById(id)
        .then(res => console.log(res));

}

exports.updateProfile = (req, res) => {
    Influencer.findByIdAndUpdate(id, { $set: req.body }, { new: true })
        .then(result => console.log(result), (err, doc) => {
            console.log("error" + err)
        });

}

exports.influencerlogin = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(422).json({ error: "Please add email or password" });
    }
    else {
        const userLogin = await Influencer.findOne({ email: email, password: password });
        console.log(userLogin);

        if (!userLogin) {
            return res.status(422).json({ error: "User not found", success: false });
        } else if (userLogin.valid === 0) {
            return res
                .status(425)
                .json({ error: "Verification under process, You can't proceed.", success: false });
        }
        else {

            // const token = jwt.sign({ _id: userLogin._id }, "mynameisFenilsavaniandthisisoursdpproject");
            // const { fname } = userLogin;
            // console.log(token)
            return res.status(200).json({
                success: true, message: "You are logged in",
                //token, user: { fname }, type: "Influencer"
            });
        }
        // bcrypt
        // .compare(password, user.password)
        //     .then(doMatch => {
        //         if (!doMatch) {
        //             return res.status(422).json({ error: "Invalid password" });
        //         }
        //     })

    }

}
exports.influencerhome=(req,res)=>{
    
}