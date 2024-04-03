const Parent = require('../models/parentModel')

exports.createParent = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const alreadyExists=await Parent.findOne({ email: email});
        
        if(alreadyExists){
            return res.status(400).json({
                message: "Email already exists"
            })
        }
        const newParent = new Parent({
            name: name,
            email: email,
            password: password
        })
        const savedParent = await newParent.save();
       return res.status(201).json({savedParent});

    } catch (err) {
        console.log(err.message);
        return res.status(500).json({
            message: err.message,
            success:false,
        })
        
    }
}
