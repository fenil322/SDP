const mongoose = require('mongoose');
module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        //strictQuery: false
    }
var compassUrl=process.env.COMPASS_URL;
compassUrl="mongodb://127.0.0.1:27017/SDP"
const atlasUrl=process.env.ATLAS_URL;

    try {
        mongoose.connect(compassUrl, connectionParams);
        console.log("Connected to DB Sucessfully");
    } catch (error) {
        console.log(error);
        console.log("Could not Connect..");
    }
};