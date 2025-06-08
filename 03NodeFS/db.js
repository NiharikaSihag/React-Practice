import mongoose from "mongoose";
const mongo_uri = 'mongodb+srv://niharika:Nonu123@cluster0.nuhtoyg.mongodb.net/managementsystem';
const connectDB = async() => {
    if(!mongo_uri){
        console.log('No Url exist');
    }
    try{
        console.log('connecting to mongo ...')
        await mongoose.connect(mongo_uri);
        console.log('Connected to mongo');

    }catch ( error){
        console.log('Error occured',error);
    }
}
export default connectDB;
