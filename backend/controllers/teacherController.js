const Teacher = require('../models/teacherModel')

exports.createTeacher = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const alreadyExists=await Teacher.findOne({ email: email});
        
        if(alreadyExists){
            return res.status(400).json({
                message: "Email already exists"
            })
        }

        const newTeacher = new Teacher({
            name: name,
            email: email,
            password: password
        })
        const savedTeacher = await newTeacher.save();
       return res.status(201).json({savedTeacher});

    } catch (err) {
        console.log(err.message);
        return res.status(500).json({
            
            message: err.message,
            success:false,
        })
    }
}