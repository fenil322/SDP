const express = require('express')
const router = express.Router();

const InfluecerController = require('../controllers/influencrController');
const influencerIsAuth = require('../middleware/influencerIsAuth');

//==> signup GET
// router.get("/signup", (req, res) => {
//     //res.send("hello world");
// });
//==> signup POST
router.post("/signup", InfluecerController.influencerSignupdata);

//=>influencer login POST
router.post("/influencerlogin",InfluecerController.influencerlogin);

//==> getting influencer data GET
router.get("/getAllInfluencer",InfluecerController.getAllInfluencer);

//=>updating influencer data GET
router.get("/editprofiledisplay",InfluecerController.editProfiledisplay);

//=>updating influencer data PUT
router.put("/updateprofile",InfluecerController.updateProfile);


//=>influencer home GET
router.get("/influencerhome",InfluecerController.influencerhome);

module.exports = router;
