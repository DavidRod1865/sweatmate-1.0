const mongoose = require("mongoose");

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

module.exports = mongoose.model("Workout", WorkoutSchema);