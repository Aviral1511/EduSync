const mongoose = require("mongoose");

require("dotenv").config();

exports.dbConnect = () => {
    console.log("in db file");
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => {console.log("DB  is Successfulllll")})
    .catch( (error) => {

        console.log("Issue in DB Connection");
        console.error(error.message);
        process.exit(1);
    } );
}

