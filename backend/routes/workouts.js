const express =require('express')
const { createWorkout, getWorkouts, getWorkout, deleteWorkout, updateWorkout } = require('../controllers/workoutController')

const requireAuth= require('../middleware/requireAuth')






const router =express.Router()

//middleware require auth for all workout routes
router.use(requireAuth)

//GET ALL workouts
router.get('/',getWorkouts)

//GET a single workout
router.get('/:id',getWorkout)

//POST a new workout
router.post('/',createWorkout)

//DELETE a workout
router.delete('/:id',deleteWorkout)

//UPADATE a workout
router.patch('/:id',updateWorkout)


module.exports = router;

