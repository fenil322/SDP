const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const multer = require('multer');
var cookieParser = require('cookie-parser');
app.use(cookieParser());

const dotenv = require('dotenv');
dotenv.config({ path: "./.env" });

const connection = require("./db/db");

const errorController = require('./controllers/error');
const logoutcontroller = require('./controllers/logoutcontroller');

const adminRoutes = require('./routes/admin.js');
const brandRoutes = require('./routes/brand.js');
const consignmentRoutes = require('./routes/consignments');
const influencerRoutes = require('./routes/influecer');
const managerRoutes = require('./routes/manager');

//models
//  const Influencer=require('./models/influencers')

//parser for parsing data in body...
app.use(multer().single('profile'))
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())

app.get('/', (req, res, next) => {
    res.send("hello from root")

    next();
});



//importing all routers...
app.use('/influencer', influencerRoutes)
app.use('/admin', adminRoutes)
app.use('/brand', brandRoutes)
app.use('/consignment', consignmentRoutes)
app.use('/manager', managerRoutes)
app.get('/logout', (req, res) => {
    res.clearCookie("jwtoken");
    try {

        res.status(200).json({ success: true, message: "Logged out successfully" });
    } catch (error) {

        res.status(400).json({ success: false, message: "somthing went wronge" });
    }


})
//default 404 page...
app.use(errorController.error404);

//connection database...
connection();

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log("running on server " + PORT)
})





