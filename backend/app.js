const express= require('express')
const app= express();
const http = require('http').Server(app);
require('dotenv').config();
const dbConnect = require('./config/dbConnect');
const parentRouter = require('./routes/parentRoutes');
const teacherRouter=require('./routes/teacherRoutes');
const courseRouter=require('./routes/courseRoutes');
const marksRouter = require('./routes/marksRoute')
const assignmentRouter=require('./routes/assignmentRoutes');

const resourceRouter=require('./routes/resourceRoutes');
const webinarRoutes=require('./routes/webinarRoutes');
const wordRoutes=require("./routes/wordsRoutes");
const questionRoutes=require("./routes/questionRoutes");  
// const quizRoutes=require("./routes/quizRoutes");  

const cors=require('cors');
const cookieParser=require('cookie-parser');
app.use(express.json());
app.use(cookieParser());

dbConnect().then(() => {
  console.log("Connection successful");
})
.catch(err => console.log(err));

const socketIO = require('socket.io')(http, {
  cors: {
      origin: "http://localhost:5173"
  }
});

//Add this before the app.get() block
socketIO.on('connection', (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);
  socket.on('disconnect', () => {
    console.log('🔥: A user disconnected');
  });
});

app.use(cors());
app.use('/api/parent',parentRouter);
app.use('/api/teacher',teacherRouter);
app.use('/api/course',courseRouter);
app.use('/api/marks',marksRouter);
app.use('/api/assignment',assignmentRouter);
const cloudinary=require('./config/cloudinary');
cloudinary.cloudinaryConnect();

app.use('/api/resources',resourceRouter);
app.use('/api/webinars',webinarRoutes);
// app.use('/api/forums', forumRouter);

app.use('/api/word', wordRoutes);
app.use('/api/question', questionRoutes);
// app.use('/api/quiz', quizRoutes);



app.get("/", (req, res) => {
    res.send("Hello, world!"); 
});


const PORT=4000;
http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

