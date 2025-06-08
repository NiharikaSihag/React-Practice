import mongoose from "mongoose";
const mongo_uri = 'mongodb+srv://niharika:Nonu123@cluster0.nuhtoyg.mongodb.net/final';
function connectToDB(){
    if(mongo_uri){
        mongoose.connect(mongo_uri);
    }
    else{
        console.log('Url do not exist')
    }
}
export default connectToDB;