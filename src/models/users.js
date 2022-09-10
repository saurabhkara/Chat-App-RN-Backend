const mongoose =require('mongoose');

const Schema = mongoose.Schema;

const Users=new Schema({
    name:String,
    phoneNumber:String,
    profileImage:{
        type:String,
        default: 'https://unsplash.com/photos/2LowviVHZ-E'
    },
    about:String,
    countryData:Object
})

module.exports=mongoose.model('users',Users);