const mongoose=require("mongoose")

const parentSchema =new mongoose.Schema({
   name:{
    type:String,
    trim:true,
    required:true,
   },
   email:{
    type:String,
    trim:true,
    required:true,
   },
   password:{
    type:String,
    trim:true,
    required:true,
   },
   EnrolledCourses:{
    type:Array,
    type: mongoose.Schema.Types.ObjectId,
    ref:"Course",
   }  
    })
module.exports=mongoose.model("Parent",parentSchema)


