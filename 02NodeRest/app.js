import express from 'express';
import User from './model.js';
import bcrypt from 'bcrypt'; 

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from express');
});

app.post('/register', async (req, res) => {
    try {
        const {name, email, age, password} = req.body;
        const userExist = await User.findOne({email});
        
        if(!userExist) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            
            await User.create({
                name,
                email,
                age,
                password: hashedPassword 
            });
            
            res.status(200).json({message: 'User created successfully'});
        } else {
            res.status(400).json({message: "User already exists"});
        }
    } catch (error) {
        console.log('Error', error);
        res.status(500).json({message: "Server error"});
    }
});

app.post('/login', async (req, res) => {
    const {email, password} = req.body;
    
    try {
        const user = await User.findOne({email});
        
        if(!user) {
            return res.status(400).json({message: 'Invalid credentials'});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        
        if(!isMatch) {
            return res.status(400).json({message: 'Invalid credentials'});
        }
        
        res.status(200).json({message: 'Login successful'});
    } catch(error) {
        console.log('Error', error);
        res.status(500).json({message: "Server error"});
    }
});
app.put('/update', async (req, res) => {
    try{
        const userId =  req.body.id;
        const userDetails = req.body;
     const updateUser = await User.findByIdAndUpdate(
        userId,
        {
            $set: userDetails
        },
    {
        new: true
    });
    res.status(200).json({message:'updated'})
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:'Server error'})
    }
})

export default app;