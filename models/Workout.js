const mongoose = require('mongoose');

const WorkoutSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: false
    },
    exercise: {
        type: String,
        required: true
    },
    sets: {
        type: Number,
        required: true,
    },
    reps: {
        type: Number,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },    
    duration: {
        type: Number,
    },
    notes: {
        type: String,
    }
});
  
module.exports = mongoose.model('Workout', WorkoutSchema);