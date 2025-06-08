import mongoose from "mongoose";
const mongo_uri = '/final';
function connectToDB(){
    if(mongo_uri){
        mongoose.connect(mongo_uri);
    }
    else{
        console.log('Url do not exist')
    }
}
export default connectToDB;
