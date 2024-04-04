const Course = require('../models/courseModel');
const Teacher = require('../models/teacherModel');

exports.createCourse = async (req, res) => {
    try {
        const { teacher, title, description } = req.body;

        console.log(teacher);

        const newCourse = new Course({
            teacher, title, description
        })
        const teacher1 = await Teacher.findById(teacher);
        console.log(teacher1);       
        const savedCourse = await newCourse.save();
        console.log(teacher1, newCourse);
        return res.status(201).json({ savedCourse });
    } catch (err) {
        console.log(err.message);
        return res.status(500).json({
            message: err.message,
            success: false,
        })

    }
}

exports.getCoursesByTeacherId = async (req, res) => {
    try {
        const { id } = req.params;
        const teacher = await Teacher.findById(id).populate('courses');
        if (!teacher) {
            return res.status(404).json({ message: "Teacher not found" });
        }
        console.log(teacher);
        const courses = teacher.courses;
        res.status(200).json(courses);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};
exports.getCoursesByParentId = async (req, res) => {
    try {
        const { id } = req.params;
        const courses = await Course.find({ Teacher: id });
        console.log(courses);
        res.status(200).json(courses);
    } catch (error) {
        console.error(error);
        res.status(401).json({ message: "Internal server error" });
    }
};