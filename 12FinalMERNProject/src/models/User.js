import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    email: {
        type: String
    },
    password:{
        type: String
    }, 
    role: {
        enum: ['Admin', 'Client']
    }
})

const User = mongoose.model('User', UserSchema);
export default User;