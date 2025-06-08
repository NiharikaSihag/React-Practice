import mongoose from "mongoose";
const ClientSchema = new mongoose.Schema({
    userId: {
        type: String,
        ref: 'User'
    },
    target: {
        type: String
    },
    activity: {
        type: String
    }
});
const Client = mongoose.model('Client', ClientSchema);
export default Client;