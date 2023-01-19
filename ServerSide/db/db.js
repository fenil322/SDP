const mongoose = require('mongoose');
module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        //strictQuery: false
    }

    try {
        mongoose.connect("mongodb+srv://fenilsavani:fenilsavani@cluster0.rfpjn37.mongodb.net/?retryWrites=true&w=majority", connectionParams);
        console.log("Connected to DB Sucessfully");
    } catch (error) {
        console.log(error);
        console.log("Could not Connect..");
    }
};