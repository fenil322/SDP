const express = require('express')
const router = express.Router();

const { brandSignUpData, brandLogin, brandhome,
        getConnectedbrand,
        getBrandData, logoUpload, updateProfile,
        imageUpload } = require('../controllers/brandController');
const brandIsAuth = require('../middleware/brandIsAuth');
const influencerIsAuth = require('../middleware/influencerIsAuth');


router.get('/', (req, res, next) => {
        res.send('<h1>hello from brand </h1>');

});
//==>>saving signup data POST
router.post('/signup', brandSignUpData);

//==>> displaying all brands
router.get('/getAllbrand', influencerIsAuth.isAuth, brandhome)

//=>brand login POST
router.post('/brandlogin', brandLogin)

//=>get brand data GET
router.get('/getBrandData', brandIsAuth.isAuth, getBrandData)

//==>upload logo PUT
router.put('/logoupload', brandIsAuth.isAuth, logoUpload)

//==>upload brand images PUT
router.put('/imageuplaod', brandIsAuth.isAuth, imageUpload)

//==>update brand profile Put
router.put('/updateprofile', brandIsAuth.isAuth, updateProfile)

//==>get connected Brand in InfluecerDetail Page POST
router.post('/getconnectedbrand', getConnectedbrand);

module.exports = router;
