//requerir modelo
const { default: mongoose } = require('mongoose')
const Workout = require('../models/WorkoutModel')

//get all
const getWorkouts=async (req,res)=>{
    const workouts = await Workout.find({}).sort({createdAt:-1})
    res.status(200).json(workouts)
}

//get a single workout
const getWorkout = async(req,res)=>{
    const { id }= req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).json({error:'No susch workout'})
    }

    const workout = await Workout.findById(id)

    if(!workout){
        res.status(400).json({error:'No susch workout'})
    }
    res.status(200).json(workout)
}



//create new workout
const createWorkout = async (req,res)=>{
    const {title,reps,load}=req.body
    //add doc a bd
    try {
        const workout = await Workout.create({title,reps,load})
        res.status(200).json(workout)
        
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }
}

//delete a workout
const deleteWorkout = async (req,res)=>{
    const { id }= req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
       return res.status(400).json({error:'No susch workout'})
    }
    
    const workout = await Workout.findOneAndDelete({_id:id})

    if(!workout){
        return   res.status(400).json({error:'No susch workout'})

    }

    res.status(200).json(workout)
}

//update a workout

const updateWorkout = async (req,res)=>{
    const { id }= req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error:'No susch workout'})
     }

     const  workout = await Workout.findOneAndUpdate({_id:id},{...req.body})

     if(!workout){
        return   res.status(400).json({error:'No susch workout'})

    }

    res.status(200).json(workout)

     

}



module.exports = {
    createWorkout,
    getWorkouts,
    getWorkout,deleteWorkout,updateWorkout

}
