import express from 'express';
 import expressApp from './express-app.js';
import databaseConnection from './database/connection.js';

const StartServer = async() => {

    const app = express();
    
    await databaseConnection();
    
    await expressApp(app);

    app.listen(3000, () => {
        console.log("listening to port 3000");
    })
    .on('error', (err) => {
        console.log(err);
        process.exit();
    })
}

StartServer();