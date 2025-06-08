import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    email:{
        type: String
    },
    password:{
        type: String
    },
    role:{
        type: String,
        enum: ['Admin', 'Client']
    }
});
const User =  mongoose.model('User', userSchema);
export default User;