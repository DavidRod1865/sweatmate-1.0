const Workout = require('../models/Workouts')

module.exports = {
    createWorkout: (req,res) => {
        if(req.user) {
            return res.render('createWorkout.ejs')
          }
        res.redirect('/login')
      },
    getWorkouts: async (req,res)=>{
        // console.log(req.user)
        try{
            const exercises = await Workout.find({userId:req.user.id})
            const itemsLeft = await Workout.countDocuments({userId:req.user.id, completed: false})
            res.render('calendar.ejs', {completedExercises: exercises, left: itemsLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    postWorkout: async (req, res)=>{
        console.log(req.body)
        try{
            await Workout.create({
                date: Date().trim(),
                exercise: req.body.exercise,
                sets: req.body.sets,
                reps: req.body.reps,
                weight: req.body.weight,
                duration: req.body.duration,
                notes: req.body.notes,
                userId: req.user.id
            })
            console.log('Workout has been added!')
            res.redirect('/calendar')
        }catch(err){
            console.log(err)
        }
    },
    deleteWorkout: async (req, res)=>{
        try{
            await Workout.findOneAndDelete({_id:req.params.id})
            console.log('Deleted Workout')
            res.json('Deleted It')
            res.redirect("/calendar");
        }catch(err){
            console.log(err)
        }
    }
}    