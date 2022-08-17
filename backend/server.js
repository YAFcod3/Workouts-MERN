require('dotenv').config()

//connect to db
require('./db')
const express= require('express')
const workoutRoutes= require('./routes/workouts')




//express app
const app = express()

//middleware
app.use(express.json())


app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

//routes
app.use('/api/workouts',workoutRoutes)


//listen for request
app.listen(process.env.PORT,()=>{
    console.log('listening on port',process.env.PORT)
})