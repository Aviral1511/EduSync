const Course = require('../models/courseModel');

exports.createAssignment = async (req, res) => {
    try {
        const { name } = req.body;
        const { file } = req.file;
        
        const newCourse = new Course({
            Teacher, title, description
        })
        const savedCourse = await newCourse.save();
        return res.status(201).json({ savedCourse });
    } catch (err) {
        console.log(err.message);
        return res.status(500).json({
            message: err.message,
            success: false,
        })
    }
}
