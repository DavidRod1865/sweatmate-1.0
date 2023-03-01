const mongoose = require('mongoose');

const ExerciseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
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
    }
});

const WorkoutSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    exercise: {
        type: [ExerciseSchema],
        required: true
    },
    notes: {
        type: String,
    }
});
  
module.exports = mongoose.model('Workout', WorkoutSchema);