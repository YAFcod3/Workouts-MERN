require('dotenv').config()
const cors = require('cors')

//connect to db
require('./db')
const express= require('express')
const workoutRoutes= require('./routes/workouts')
const userRoutes = require ('./routes/user.js')




//express app
const app = express()

//middleware
app.use(express.json())
app.use(cors())


app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

//routes
app.use('/api/workouts',workoutRoutes)
app.use('/api/user',userRoutes)


//listen for request
app.listen(process.env.PORT,()=>{
    console.log('listening on port',process.env.PORT)
})