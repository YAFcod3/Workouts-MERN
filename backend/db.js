const mongoose = require('mongoose')
require('dotenv').config()

 async function connectDB(){


    try {

        const db = await mongoose.connect(process.env.MONGODB_URI)
        console.log('Connect to', db.connection.name)
    } catch (error) {
        console.log(error)
        
    }

}

connectDB();
