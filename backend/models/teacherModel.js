const mongoose=require("mongoose")

const teacherSchema =new mongoose.Schema({
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
   courses:{
    type:Array,
    type: mongoose.Schema.Types.ObjectId,
    ref:"Course",
   }  

    })
module.exports=mongoose.model("Parent",teacherSchema)


