const express = require('express')

//controllers functions
const {signup,loginUser}=require ('../controllers/userController.js')


const router = express.Router()





//login route
router.post('/login',loginUser )

//signup route
router.post('/signup',signup )







module.exports = router