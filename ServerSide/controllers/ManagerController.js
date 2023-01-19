const Brand = require('../models/brand')
const Influencer = require('../models/influencers')
const Manager = require('../models/manager')


exports.managersignup = (req, res) => {
    const { name, email, password, phone } = req.body;
    if (!email || !password || !name || !phone) {
        return res.status(422).json({ error: "Please fill all the fields" });
    }
    Manager
        .findOne({ email: email })
        .then(user => {
            if (user) {
                return res.status(422).json({ error: "Email already exists", success: false });
            }
            const manager = new Manager(req.body);
            console.log(manager)
            manager.save()

            return res.status(200).json({ success: true, message: "Your data is under verification" });

        })
        .catch((err) => {
            console.log(err);
        });

}

exports.managerlogin = (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(422).json({ error: "Please add email or password" });
    }
    else {
        Manager.findOne({ email: email, password: password })
            .then(user => {
                console.log("use found" + user);
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
        }).then(result => console.log(result))
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
        }).then(result => console.log(result))
        .catch((err) => console.log(err))
}
