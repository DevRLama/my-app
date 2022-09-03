const  mongoose=require('mongoose')
const mongURI='mongodb://localhost:27017/mydb';

const connectToMongo=()=>{
    mongoose.connect(mongURI),()=>{
        console.log('Connect to Mongoose succesfully')
    }
}

module.exports=connectToMongo;