const Teacher = require('../models/teacherModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.createTeacher = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const alreadyExists = await Teacher.findOne({ email: email });

        if (alreadyExists) {
            return res.status(400).json({
                message: "Email already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newTeacher = new Teacher({
            name: name,
            email: email,
            password: hashedPassword
        });

        const savedTeacher = await newTeacher.save();

        return res.status(201).json({ savedTeacher });
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false,
            error: err.message
        });
    }
};

exports.loginTeacher = async (req, res) => {
    try {
        const { email, password } = req.body;
        const alreadyExists = await Teacher.findOne({ email: email });

        if (!alreadyExists) {
            return res.status(400).json({
                message: "Invalid Credentials"
            });
        }

        const validPassword = await bcrypt.compare(password, alreadyExists.password);
        
        if (!validPassword) {
            return res.status(400).json({
                message: "Invalid Credentials"
            });
        }

        const payload = {
            id: alreadyExists._id,
            email: email
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1d" });

        res.cookie("token", token, {
            httpOnly: true
        });

        return res.status(200).json({ message: "Login successful", token });
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false,
            error: err.message
        });
    }
};
