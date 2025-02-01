import mongoose from "mongoose";

const loanApplicationSchema = new mongoose.Schema({
    
    // Loan Details
    loanDetails: {
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
            enum: ['PERSONAL', 'BUSINESS', 'EDUCATION', 'HOME', 'VEHICLE', 'OTHER']
        }
    },

    // Personal Details
    personalDetails: {
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
            unique: true,
            trim: true,
            lowercase: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email']
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
            unique: true,
            trim: true,
            uppercase: true,
            match: [/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, 'Please provide a valid PAN number']
        },
        mobileNumber: {
            type: String,
            required: true,
            trim: true,
            match: [/^[6-9]\d{9}$/, 'Please provide a valid Indian mobile number']
        },
        aadhaarNumber: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            match: [/^\d{12}$/, 'Please provide a valid Aadhaar number']
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
            match: [/^\d{6}$/, 'Please provide a valid PIN code']
        }
    },

    // Application Status
    status: {
        type: String,
        required: true,
        enum: ['PENDING', 'UNDER_REVIEW', 'APPROVED', 'REJECTED', 'DISBURSED'],
        default: 'PENDING'
    },

    // Terms and Conditions
    termsAccepted: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: true,
    versionKey: false
});

export const Loan = mongoose.model("Loan", loanApplicationSchema)