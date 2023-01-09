const express =require('express');
const bodyparser=require('body-parser');
const app=express();


const errorController=require('./controllers/error');

const adminRoutes = require('./routes/Admin.js');
const BrandRoutes = require('./routes/Brand.js');
const ConsignmentRoutes = require('./routes/Consignment.js');
const InfluenceRoutes = require('./routes/Influecer');
const ManagerRoutes = require('./routes/Manager');




app.use(bodyparser.urlencoded({extended:false}));
// app.use(bodyparser.json())

app.use('/admin',adminRoutes)
app.use(errorController.error404);

const PORT=8000
app.listen(PORT,()=>{
console.log("running on server" + PORT )
})





