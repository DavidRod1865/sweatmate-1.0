const express = require('express')
const router = express.Router()
const workoutController = require('../controllers/workout') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, workoutController.getWorkouts)

router.get('/createWorkout', workoutController.createWorkout)

router.post('/postWorkout', workoutController.postWorkout)

router.delete('/deletePost/:id', workoutController.deleteWorkout)

module.exports = router