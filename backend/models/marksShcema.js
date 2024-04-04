const mongoose = require("mongoose")

const markSchema = new mongoose.Schema({
    marks: {
        type: Number,
    },
    course: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Course",
    },
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Parent",
    }
})
module.exports = mongoose.model("Marks", markSchema)


