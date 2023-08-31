const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    userId: { type: String, required: true, max: 36, unique: true },
    name: { type: String, required: true, max: 100 },
    email: { type: String, required: true, unique: true },
    role: { type: Schema.Types.ObjectId, ref: 'Role'},
    profilePicture: { type: String },
    bannerPicture: { type: String },
    website: { type: String }, // What if an applicant wants to show off their portfolio website? I think this is something for all users
    description: { type: String },
    industry: { type: String },
    location: { type: String },
    locationType: { type: String },
    onBoardingFinished: { type: Boolean },
    employer: {
      numOfEmployees: { type: Number }, // So far the only difference looks like the number of employees...
      employerType: {
          type: String,
          enum: [
              'Sole Proprietorship',
              'Partnership',
              'Corporation',
              'Limited Liability Company (LLC)',
              'Cooperative (Co-op)',
              'Franchise',
              'Non-Profit Organization',
              'Foundation',
              'Trust',
              'Freelancer',
              'Consultancy',
              'Agency',
              'Joint Venture',
              'Governmental Organization',
              'International Organization',
              'Trade Union',
              'Holding Company',
              'Conglomerate',
              'E-commerce Business',
              'Dropshipping',
              'Affiliate Marketing',
              'Startup',
              'Family-Owned Business',
              'Microenterprice',
              'Social Enterprise'],
          default: 'Startup'
      }
    },
    applicant: {
      skills: { type: [{ type: String }] },
      title: { type: String },
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
      default: 'Full-Time' },
    }
  },
  { collection: "users" }
);

// Export model
module.exports = mongoose.model("User", UserSchema);
