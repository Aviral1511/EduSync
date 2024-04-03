const express= require('express')
const app= express();
require('dotenv').config();
const {dbConnect} = require('./config/dbConnect');
app.get('/', (req, res) => {
    res.send('Hello World!')
})

dbConnect();
app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})