import mongoose from "mongoose";
const AdminSchema = new mongoose.Schema({
    userId: {
        type: String,
        ref: 'User',
        required: true
    },
    phoneNumber: {
        type: String,

    }
});
const Admin = mongoose.model('Admin', AdminSchema);
export default Admin;