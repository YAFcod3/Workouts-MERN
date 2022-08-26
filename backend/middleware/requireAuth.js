const jwt = require('jsonwebtoken')
const User= require('../models/userModel')

const requireAuth = async(req,res,next)=>{



    //verify authentication

    const {authorization} = req.headers

    if(!authorization){
        return res.status(401).json({error:'Authorization token required'})
    }





    //ok
    const token = authorization.split(' ')[1]

    try {
        const {_id}= jwt.verify(token,'LLAVESECRETA')//ponerlo en env despues
       
        //ojo m ayuda a obtener el user pa relac con su workout
        req.user =await User.findOne({_id}).select('_id')
        next()
        
    } catch (error) {
        console.log(error)
        res.status(401).json({error:'Request is not authorized'})
        
    }

}

module.exports= requireAuth