import app from "./app.js";
import mongoose from 'mongoose'
const MONGO_URI = 'mongodb+srv://niharika:Nonu123@cluster0.nuhtoyg.mongodb.net/restapi'
const connectDB = async () =>{
    if(!MONGO_URI){
        console.log('No such url');
    }
    try{
        console.log('connecting to mongo');
        await mongoose.connect(MONGO_URI);
        console.log('connected')
    }catch (error){
        console.log('Got error', error);
    }

}
const startServer = async () =>{
    await connectDB();
    app.listen(5000, () => {
    console.log(`✅ Server running at http://localhost:5000`);
  });
}
startServer()