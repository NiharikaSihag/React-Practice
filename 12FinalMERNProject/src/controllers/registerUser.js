import Admin from "../models/Admin.js";
import Client from "../models/Client.js";
import User from "../models/User.js";

export const registerUser = async(req, res) => {
    try{
    const {email, password, role} = req.body;
    const user = await User.findOne({email});
    if(user){
        res.status(400).json({message: 'User already exist'})
    }
    else{
        User.create({
            email: email,
            password: password,
            role: role
        });

        if(role === 'Admin'){
            Admin.create({
                phoneNumber: '74047483757'
            })
        }else if( role === 'Client'){
            Client.create({
                target: 'its my target'
            })
        }
        res.status(201).json({message: 'User created successfully'})
    }
    }catch(error){
        res.status(500).json({message: 'Server error'})
    }

}