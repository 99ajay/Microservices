
import express from 'express';
import cors from 'cors';
import Customer from './api/Customer.js';
import path from 'path';
import { pathToFileURL } from 'url';

 
 const expressApp = async(app) => {

    app.use(express.json({ limit: '1mb'}));
    app.use(express.urlencoded({ extended: true, limit: '1mb'}));
    app.use(cors());
 
    //api
    Customer(app);

    // error handling
    
    
}

export default expressApp;