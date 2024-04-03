const mongoose=require("mongoose")

const courseSchema =new mongoose.Schema({
   title:{
    type:String,
    trim:true,
    required:true,
   },
   description:{
    type:String,
    required:true,
   },
   Assignment:{
    type:String,
   },
   Teacher:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Teacher",
    require:true,
   },
   EnrolledUser:{
    type:Array,
    type: mongoose.Schema.Types.ObjectId,
    ref:"Parent",
   }  
    })
module.exports=mongoose.model("Course",courseSchema)

