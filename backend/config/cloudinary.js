const cloudinary = require('cloudinary').v2;
require('dotenv').config();

exports.cloudinaryConnect = () => {
    try {
        console.log("cldnry in")
        cloudinary.config({
            cloud_name: process.env.CLOUD_NAME,
            api_key: process.env.API_KEY,
            api_secret: process.env.API_SECRET,
        })
        console.log("cldnry out+")
    } catch (err) {
        console.error(err);
        console.log("cannot connect to Cloudinary")
    }
}