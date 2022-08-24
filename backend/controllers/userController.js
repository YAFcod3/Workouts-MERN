const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const validator = require('validator')
const jwt = require('jsonwebtoken')
require('dotenv')

//__________________________________________________________________________________________
//funcion de crear token
const createToken = (_id)=>{

   return jwt.sign(  {_id}, 'LLAVESECRETA',  {expiresIn:'3d'} )
}


//______________________________LOGIN_____________________________________________________


const loginUser = async (req,res)=>{

    const {email,password}=req.body

    try {

        //validator
        if(!email || !password){
            throw Error('ALL fields must be filled')   //pa'l catch
        }
        
        //pasó la validación por tanto:
      
        const user = await User.findOne({email})

        if(!user){
            throw Error('Incorrect Email')
        }

        //email ok por tanto verificar q la contrse;a sea valida para este usuario
        const match = await bcrypt.compare(password,user.password)

        if(!match){
            throw Error('Incorrect passwword')
        }

        //contrase;a valida ,por tanto crear token y send it ,tamb email
         const token = createToken(user._id)

         //send cod 200 y objeto  user al front
         res.status(200).json({email,token})

    
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }

    
}

//_______________________________SIGNUP USER__________________________________________________________//

const signup = async (req,res)=>{

    const {email,password}=req.body


    try {

        //validator
        if(!email || !password){
            throw Error('ALL fields must be filled')   //pa'l catch
        }
        if(!validator.isEmail(email)){
            throw Error('Email is not valid')
        }
        if(!validator.isStrongPassword(password)){     //debe tener min,may,# y simb 
            throw Error('Password not strong enough')
        }
    

        //pasó la validación por tanto:
      
        const exist = await User.findOne({email})

        if (exist){
           throw Error('Email already in use')
        }

            //bcrypt
            const salt = await bcrypt.genSalt(10)
            const hash = await bcrypt.hash(password,salt)
            //crear y bd
            const user= await User.create({email,password:hash}) 

            //create token
            const token = createToken(user._id)

            //send cod 200 y objeto  user al front
            res.status(200).json({email,token})



        
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }

  
}
//_________________________________________________________________________________________

module.exports= {signup,loginUser}