import mongoose, {Schema, models} from 'mongoose';

// Define the user schema

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  hashedPassword: {
    type: String,
    required: true,
  },
  satScore: {
    type: Number,
    default: null, // You can set a default value or make it optional
  },
  actScore: {
    type: Number,
    default: null,
  },
  apExamScores: [{
    subject: String,
    score: Number,
  }],
  honorsClassesTaken: {
    type: Number,
    default: 0,
  },
  apClassesTaken: {
    type: Number,
    default: 0,
  },
  dualEnrollmentClassesTaken: {
    type: Number,
    default: 0,
  },
  extracurriculars: [{
    type: String,
    rating: Number, // Use the rating scale here
  }],
  recommendationLetters: {
    type: String,
    enum: ['Exceptional', 'Very Strong', 'Strong', 'Standard'],
  },
  essays: {
    type: String,
    enum: ['Exceptional', 'Very Strong', 'Strong', 'Standard'],
  },
  awards: {
    type: String,
    enum: ['Exceptional', 'Very Strong', 'Strong', 'Standard'],
  },
  highSchoolClassRigor: {
    apClasses: Number,
    ibClasses: Number,
    dcClasses: Number,
    advClasses: Number,
  },
  graduationDate: {
    type: Number,
    default: null
  }
});

// Create the User model
const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
