/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  Insha Allah 
By his marcy,  I will gain success
*/

import mongoose from 'mongoose';

const settingsSchema = mongoose.Schema({
    date_of_online_class:{
        date :String,
    },
    date_of_regular_class:{
        date :String,
    },
    date_of_womens_defence_class:{
        date :String,
    },
    home_video_url:String,
    youtube_refresh_token:String,
    youtube_token:String,
    fb_access_token_enroll_date:Number,
    fb_access_token:String,
    linkedin_access_token:String,
    instagram_token:String,
    tiktok_access_token:String,
    tiktok_refresh_token :String,
    tiktok_access_token_status:Boolean,
    youtube_access_token_status:Boolean,
    linkedin_access_token_status:Boolean,
    instagram_access_token_status:Boolean,
   
});


const Settings=mongoose.model('settings', settingsSchema);

export default Settings