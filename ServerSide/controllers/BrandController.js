const Brand = require("../models/brand");
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
    try{

        const data= await Brand.findOne({ email: email });
        if(data){
            return res.status(422).json({ error: "Email already exists", success: false });
        }
        const brand = new Brand(req.body);
        brand.save()
        // console.log(brand)
        return res.status(200).json({ success: true, message: "Your data is under verification" });

    } catch(err ){
        return res.status(422).json({ error: "Something went wronge!! try later!!", success: false });
          
    };
};

exports.brandhome = async (req, res) => {
  const brand = await Brand.find({ valid: 1 });
  if (brand) {
    res.status(200).json({ success: true, data: brand });
  }
};

exports.brandLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ error: "Please add email or password" });
  } else {
    const userLogin = await Brand.findOne({ email: email, password: password });

  //   console.log(userLogin);

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
      console.log(token);
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
