const mongoose = require('mongoose');
module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        //strictQuery: false
    }

    try {
        mongoose.connect("mongodb://localhost:27017/SDP", connectionParams);
        console.log("Connected to DB Sucessfully");
    } catch (error) {
        console.log(error);
        console.log("Could not Connect..");
    }
};