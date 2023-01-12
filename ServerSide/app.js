const express = require('express');
const bodyparser = require('body-parser');
const app = express();

const connection = require("./db/db");

const errorController = require('./controllers/error');

const adminRoutes = require('./routes/admin.js');
const brandRoutes = require('./routes/brand.js');
const consignmentRoutes = require('./routes/consignments');
const influencerRoutes = require('./routes/influecer');
const managerRoutes = require('./routes/manager');



//parser for parding data in body...
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

//default 404 page...
app.use(errorController.error404);

//connection database...
connection();

const PORT = 8000

app.listen(PORT, () => {
    console.log("running on server " + PORT)
})





