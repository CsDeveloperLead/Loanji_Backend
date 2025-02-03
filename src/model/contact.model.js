import mongoose, { Schema } from "mongoose";

const contactUser = new mongoose.Schema({
    firstname : {
        type: String,
    },
    lastname : {
        type:String,
    },
    email: {
        type:String,
        required:true,
    },
    mobile: {
        type:Number,
        required:true,
    },
    message: {
        type:String,
        required:true
    }
})

export const ContactUs = mongoose.model("Contact Details", contactUser)