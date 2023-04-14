const Workout = require('../models/Workouts')
const dayjs = require('dayjs')

module.exports = {
    createWorkout: (req,res) => {
        if(req.user) {
            return res.render('createWorkout.ejs')
          }
        res.redirect('/login')
      },
    getWorkoutPost: async (req, res) => {
            try {
              const exercisePost = await Workout.findById(req.params.id);
              res.render("workout.ejs", { 
                exercisePost: exercisePost, 
                user: req.user
            });
            } catch (err) {
              console.log(err);
            }
          },
    getWorkouts: async (req,res)=> {
        try{
            // const exercises = await Workout.find({userId:req.user.id})
            const exercises = await Workout.find({
                date: dayjs().format('MM/DD/YYYY'),
              });
            //   console.log(dayjs(exercises.date).format('MM/DD/YYYY'))
            res.render('calendar.ejs', {
                exercises: exercises, 
                user: req.user
            })
        }catch(err){
            console.log(err)
        }
    },
    filterWorkouts: async (req,res)=> {
        try{
            const exercises = await Workout.find({
                date: dayjs(req.body.calendar).toDate() ,
              });
            res.render('calendar.ejs', {
                exercises: exercises, 
                user: req.user
            })
        }catch(err){
            console.log(err)
        }
    },
    postWorkout: async (req, res)=>{
        console.log(req.body)
        try{
            await Workout.create({
                date: dayjs(req.body.date).format('MM/DD/YYYY'),
                exercise: req.body.exercise,
                sets: req.body.sets,
                reps: req.body.reps,
                weight: req.body.weight,
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
        try {
            // Find post by id
            let workout = await Workout.findById({ _id: req.params.id });
            // Delete post from db
            await workout.remove({ _id: req.params.id });
            console.log("Deleted Post");
            res.redirect("/calendar");
        } catch (err) {
            res.redirect("/calendar");
        }
    },
};