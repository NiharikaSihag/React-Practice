import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
    phoneNumber: {
        type: String
    }
})

const Admin = mongoose.model('Admin', AdminSchema);
export default Admin;