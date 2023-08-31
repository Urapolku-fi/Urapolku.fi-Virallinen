const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    salary: {
        hourly: { type: Number, required: true },
        daily: { type: Number, required: true },
        weekly: { type: Number, required: true },
        monthly: { type: Number, required: true },
        yearly: { type: Number, required: true }
    },
    employmentType: { type: String, enum: [
            'Full-Time',
            'Part-Time',
            'Zero-Hours',
            'Temporary',
            'Seasonal',
            'Contractual',
            'Freelance or Independent Contractor',
            'Casual',
            'Permanent',
            'Internship',
            'Apprenticeship',
            'On-call or Standby',
            'Remote or Telecommuting',
            'Job Sharing',
            'Self',
            'Gig',
            'Commission-based',
            'Volunteer',
            'Probationary'
        ],
        default: 'Full-Time'
    },
    postedDate: {
        type: Date,
        default: Date.now
    },
    isActive: {
        type: Boolean,
        default: true
    }
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;