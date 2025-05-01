import mongoose, { Schema } from "mongoose";
 
const contactUser = new mongoose.Schema({
    FirstName : {
        type: String,
    },
    LastName : {
        type:String,
    },
    Email: {
        type:String,
        required:true,
    },
    MobileNumber: {
        type:Number,
        required:true,
    },
    Message: {
        type:String,
    }
})
 
export const ContactUs = mongoose.model("Contact Details", contactUser);