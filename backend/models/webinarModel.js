const mongoose=require("mongoose")

const resourceSchema =new mongoose.Schema({
   title:{
    type:String,
    trim:true,
    required:true,
   },
   description:{
    type:String,
    required:true,
   },
   hosts:{
    type: Array,
   },
   time:{
    type:Date,
   }
} , { timestamps: true }
)
module.exports=mongoose.model("Webinar",resourceSchema)


