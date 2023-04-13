const express = require('express')
const router = express.Router()
const workoutController = require('../controllers/workout') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, workoutController.getWorkouts)

// router.get('/', workoutController.filterWorkouts)

router.get('/createWorkout', workoutController.createWorkout)

router.get('/workout/:id', workoutController.getWorkoutPost)

router.post('/postWorkout', workoutController.postWorkout)

router.delete('/deleteWorkout/:id', workoutController.deleteWorkout)

module.exports = router