
// const mongoose = require('mongoose');
import mongoose from 'mongoose';
const databaseConnection= async()=>{
    try{
        // console.log(DB_URL);
       mongoose.connect('mongodb://127.0.0.1:27017/CURD',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
       // useCreateIndex: true
       })
       console.log("Database is connected Successfully");
    }
    catch(e){
        console.log("Error is occuring while connecting the database");
        console.log(e);
        process.exit(1);
    }
}

export default databaseConnection;