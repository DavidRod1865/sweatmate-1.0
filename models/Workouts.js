const mongoose = require('mongoose');

// const WorkoutSchema = new mongoose.Schema({
//     userId: {
//         type: String,
//         required: true
//       },
//     createdAt: {
//         type: Date,
//         default: Date.now,
//     },
//     exercise: {
//         type: String,
//         required: true
//     },
//     sets: {
//         type: Number,
//         required: true,
//     },
//     reps: {
//         type: Number,
//         required: true,
//     },
//     weight: {
//         type: Number,
//     },    
//     duration: {
//         type: Number,
//     },
//     notes: {
//         type: String,
//     }
// });
  
const WorkoutSchema = new mongoose.Schema({
    date: { 
        type: Date, 
        required: true 
    },
    exercise: { 
        type: String,
    },
    sets: { 
        type: Number,
    },
    reps: { 
        type: Number, 
    },
    weight: { 
        type: Number,
    },
    notes: {
        type: String,
    },
    userId: {
        type: String,
        required: true
    }
  });

module.exports = mongoose.model('Workout', WorkoutSchema);