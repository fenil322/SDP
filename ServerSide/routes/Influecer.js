const express = require('express')
const router = express.Router();

const InfluecerController = require('../controllers/influencrController');

//==> signup GET
router.get("/signup", (req, res) => {
    res.send("hello world");
});

//==> signup POST
router.post("/signup", InfluecerController.influencerSignupdata);

//==> getting influencer data GET
router.get("/getAllInfluencer",InfluecerController.getAllInfluencer);

//=>updating influencer data GET
router.get("/editprofiledisplay",InfluecerController.editProfiledisplay);

//=>updating influencer data PUT
router.put("/updateprofile",InfluecerController.updateProfile);

//=>influencer login POST
router.post("/influencerlogin",InfluecerController.influencerlogin);



module.exports = router;
