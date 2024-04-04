const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true,
    },
    courseId: {
        type: String,
    },
    description: {
        type: String,
        required: true,
    },
    Assignment: {
        type: Array,
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Teacher",
    },
    EnrolledUser: {
        type: Array,
        type: mongoose.Schema.Types.ObjectId,
        ref: "Parent",
    }
})
module.exports = mongoose.model("Course", courseSchema)


