const Course = require('../models/courseModel');
const Assignment = require('../models/assignmentModel');
exports.createCourse = async (req, res) => {
    try {
        const { Teacher, title, description } = req.body;

        const newCourse = new Course({
            Teacher, title, description
        })
        const savedCourse = await newCourse.save();

        return res.status(201).json(savedCourse._id);
    } catch (err) {
        console.log(err.message);
        return res.status(500).json({
            message: err.message,
            success: false,
        })
    }
}

exports.fetchAllAssignments = async (req, res) => {
    try {
               
        const course = await Course.findById(req.params.id);
        console.log(course);
        if (!course) {
            return res.status(404).json({
                message: "Course not found"
            });
        }
        const assignments = course.Assignment || [];

        return res.status(200).json({
            assignments: assignments
        });

    } catch (err) {
        console.error(err.message);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false,
        });
    }
};