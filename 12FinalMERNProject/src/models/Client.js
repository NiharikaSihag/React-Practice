import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema({
    target: {
        type: String
    }
})

const Client = mongoose.model('Client', ClientSchema);
export default Client;