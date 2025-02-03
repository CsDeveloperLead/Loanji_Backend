import mongoose from "mongoose";

const loanApplicationSchema = new mongoose.Schema({
    
        loanAmount: {
            type: Number,
            required: true,
            min: 0
        },
        monthlyIncome: {
            type: Number,
            required: true,
            min: 0
        },
        purpose: {
            type: String,
            required: true,
        },
    
        fullName: {
            type: String,
            required: true,
            trim: true,
            minlength: 2,
            maxlength: 100
        },
        email: {
            type: String,
            required: true,
            trim: true
        },
        dateOfBirth: {
            type: Date,
            required: true,
            validate: {
                validator: function(date) {
                    return date < new Date();
                },
                message: 'Date of birth must be in the past'
            }
        },
        panCard: {
            type: String,
            required: true,
            // unique: true,
            trim: true,
            uppercase: true,
        },
        mobileNumber: {
            type: String,
            required: true,
            trim: true,
        },
        aadhaarNumber: {
            type: String,
            required: true,
            // unique: true,
            trim: true,
        },
        gender: {
            type: String,
            required: true,
            enum: ['MALE', 'FEMALE', 'OTHER']
        },
        state: {
            type: String,
            required: true,
            trim: true
        },
        city: {
            type: String,
            required: true,
            trim: true
        },
        pinCode: {
            type: String,
            required: true,
            trim: true,
        }
    },
{
    timestamps: true,
    versionKey: false
});

export const Loan = mongoose.model("Loan", loanApplicationSchema)