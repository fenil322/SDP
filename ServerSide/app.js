const express =require('express');
const bodyparser=require('body-parser');
const app=express();


const errorController=require('./controllers/error');

const adminRoutes = require('./routes/Admin.js');
const BrandRoutes = require('./routes/Brand.js');
const ConsignmentRoutes = require('./routes/Consignments');
const InfluenceRoutes = require('./routes/Influecer');
const ManagerRoutes = require('./routes/Manager');




app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json())

//importing all routers.....
app.use('/admin',adminRoutes)
app.use('/brand',BrandRoutes)
app.use('/consignment',ConsignmentRoutes)
app.use('/influence',InfluenceRoutes)
app.use('/manager',ManagerRoutes)


app.use(errorController.error404);

const PORT=8000

app.listen(PORT,()=>{
console.log("running on server" + PORT )
})





