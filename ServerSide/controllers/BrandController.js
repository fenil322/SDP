const Brand = require("../models/brand");
const Consignment = require("../models/consignment");
const Influencer = require("../models/influencers");

exports.brandSignUpData = async (req, res) => {
  const {
    uname,
    shopName,
    brandType,
    phone,
    email,
    city,
    state,
    country,
    address,
    location,
    password,
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
  try {

    const data = await Brand.findOne({ email: email });
    if (data) {
      return res.status(422).json({ error: "Email already exists", success: false });
    }
    const brand = new Brand(req.body);
    brand.save()
    // console.log(brand)
    return res.status(200).json({ success: true, message: "Your data is under verification" });

  } catch (err) {
    return res.status(422).json({ error: "Something went wronge!! try later!!", success: false });

  };
};

exports.brandhome = async (req, res) => {
  const page = req.query.page
  // console.log(req.query.page);
  const brand = await Brand.find({ valid: 1 })
    .skip((page - 1) * 3).limit(3)
  // if (brand) {
  //   let influencerArray = new Array();
  //   const promises = brand.map(async (element) => {

  //     const id = element._id;
  //     // console.log("id is",id);

  //     const cons = await Consignment.find({ brandId: id })
  //     if (cons) {
  //       const promises1 = cons.map(async (element1) => {

  //         // console.log(cons);
          // console.log(element1.influencerId);
  //         const _id = element1.influencerId;
  //         const influencer = await Influencer.findById(_id).select("-password").select("-tokens")
          // console.log(influencer);
  //         influencerArray.push(influencer);
  //       })

  //     }

  //   })
  // }
  // Promise.all(promises).then(() => {
  // console.log(influencerArray);
  // console.log(influencerArray.length);
  // })
  // return res.status(422).json({ success: false, message: "No brand found" });
  if (brand) {
    return res.status(200).json({ success: true, data: brand });
  }

};

exports.brandLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ error: "Please add email or password" });
  } else {
    const userLogin = await Brand.findOne({ email: email, password: password });

      // console.log(userLogin);

    if (!userLogin) {
      return res.status(422).json({ error: "User not found", success: false });
    } else if (userLogin.valid === 0) {
      return res
        .status(425)
        .json({
          error: "Verification under process, You can't proceed.",
          success: false,
        });
    } else {
      //  const token = jwt.sign({ _id: userLogin._id }, "mynameisFenilsavaniandthisisoursdpproject");
      const token = await userLogin.generateAuthToken();
      const { fname } = userLogin;
      // console.log(token);
      if (token) {
        res.cookie("jwtoken", token, {
          expires: new Date(Date.now() + 2589200000),
          httpOnly: true,
        });
        return res.status(200).json({
          success: true,
          message: "You are logged in",
          token,
          user: { fname },
          type: "Influencer",
        });
      } else {
        return res
          .status(422)
          .json({
            error: "Something went wronge!! try later!!",
            success: false,
          });
      }
    }
    // bcrypt
    // .compare(password, user.password)
    //     .then(doMatch => {
    //         if (!doMatch) {
    //             return res.status(422).json({ error: "Invalid password" });
    //         }
    //     })
  }
};

exports.getBrandData = async (req, res) => {
  const brand = req.rootUser;
  res.json({ data: brand });
};

exports.updateProfile = async (req, res) => {
  const id = req.userId
  // const profle = req.file
  // console.log(req.body);

  const brand = await Brand.findByIdAndUpdate(id, { $set: req.body }, { new: true }).select("-tokens")
  if (!brand) {
    return res.status(422).json({ message: "Data not updated!", success: false, data: brand });
  } else {
    return res.status(200).json({ message: "Data updated successfully!", success: true, data: brand });
  }

}

exports.logoUpload = async (req, res) => {
  const id = req.userId
  // console.log(req.body);
  var brand = "";
  if (req.body.type == 1) {
    const logo = req.body.logo
    brand = await Brand.findByIdAndUpdate(id, { logo: logo }, { new: true }).select("-tokens")

  } else {
    const photo1 = req.body.photo1
    brand = await Brand.findByIdAndUpdate(id, { photo1: photo1 }, { new: true }).select("-tokens")
  }
  // console.log(brand);
  if (!brand) {
    return res.status(422).json({ message: "Logo not updated!", success: false, data: brand });
  } else {
    return res.status(200).json({ message: "Logo updated successfully!", success: true, data: brand });
  }
}
exports.imageUpload = async (req, res) => {
  const id = req.userId
  // console.log(req.body);
  const image = req.body.image
  const brand = await Brand.findByIdAndUpdate(id, { $push: { images: { url: image } } }, { new: true }).select("-tokens")
  // console.log("hello");
  // console.log(brand);
  if (!brand) {
    return res.status(422).json({ message: "Image not updated!", success: false, data: brand });
  } else {
    return res.status(200).json({ message: "Image updated successfully!", success: true, data: brand });
  }
}

exports.getConnectedbrand=async(req,res)=>{
  // console.log(req.body);
    const id = req.body.id;
    // console.log(id);
    const data = await Consignment.find({
        influencerId: id,
        shoprequest: 1,
        influencerrequest: 1,
    });
    // console.log(data.length)
    let brand = new Array()
    let date = new Array()
    const promises = data.map(async (item) => {
        const id = item.brandId
        const data = await Brand.findById(id).select("-tokens").select("-password")
        brand.push(data);
        date.push(item.Date)
    })
    Promise.all(promises).then(async (result) => {
        res.status(200).json({ success: true, data: brand, date: date });
    })
}