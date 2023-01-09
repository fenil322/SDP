const express =require('express');
const bodyparser=require('body-parser');
const app=express();


const errorController=require('./controllers/error');

const adminRoutes = require('./routes/admin.js');
const brandRoutes = require('./routes/brand.js');
const consignmentRoutes = require('./routes/consignments');
const influenceRoutes = require('./routes/influecer');
const managerRoutes = require('./routes/manager');




app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json())

//importing all routers.....
app.use('/admin',adminRoutes)
app.use('/brand',brandRoutes)
app.use('/consignment',consignmentRoutes)
app.use('/influence',influenceRoutes)
app.use('/manager',managerRoutes)


app.use(errorController.error404);

const PORT=8000

app.listen(PORT,()=>{
console.log("running on server" + PORT )
})





