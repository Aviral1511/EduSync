const express= require('express')
const app= express();
require('dotenv').config();
const {dbConnect} = require('./config/dbConnect');
const parentRouter = require('./routes/parentRoutes');
const teacherRouter=require('./routes/teacherRoutes');
const courseRouter=require('./routes/courseRoutes');
const assignmentRouter=require('./routes/assignmentRoutes');
const cors=require('cors');
const cookieParser=require('cookie-parser');
app.use(express.json());
app.use(cookieParser());
dbConnect();
app.use(cors());
app.use('/api/parent',parentRouter);
app.use('/api/teacher',teacherRouter);
app.use('/api/course',courseRouter);
app.use('/api/assignment',assignmentRouter);
const cloudinary=require('./config/cloudinary');
cloudinary.cloudinaryConnect();

app.get("/", (req, res) => {
    res.send("Hello, world!"); 
  });

const port=4000;
app.listen(4000, () => {
    console.log(' app listening on port '+port)
})