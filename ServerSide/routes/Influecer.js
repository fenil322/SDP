const express = require('express')
const router = express.Router();

const InfluecerController = require('../controllers/influencrController');

router.get("/influencersignup", (req, res) => {
    res.send("hello world");
    // console.log(req.body);
});
router.post("/influencersignup", InfluecerController.influencerSignupdata);



module.exports = router;
