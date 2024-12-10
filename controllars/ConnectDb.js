/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  
Insha Allah,  By his marcy I will Gain Success 
*/

import mongoose from "mongoose";
import {log} from 'console'
import { DATABASE } from "./ENV.js";

export const connectDB = async() => {
    try {
       await mongoose.connect(DATABASE);
       console.log('db connect');
    } catch (error) {
        log(error)
    }  
}
