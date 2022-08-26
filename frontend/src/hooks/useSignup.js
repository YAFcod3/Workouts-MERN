import { useState } from "react";
import {useAuthContext} from './useAuthContext'




 export const useSignup = () => {

    const [error,setError]=useState(null)
    const[isLoading,setIsLoading]=useState(false)

    //dispatch
    const {dispatch}=useAuthContext()





    const signup = async(email,password)=>{
        
        setIsLoading(true)
        setError(null)

        

        const response= await fetch('/api/user/signup',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({email,password})
        })
        const json = await response.json()

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok){

            //save the user to local Storage (token y email)
            localStorage.setItem('user',JSON.stringify(json))

            //update the auth context
            dispatch({type:'LOGIN',payload:json})
            setIsLoading(false)
        }
    }



    return ( 
        {signup,isLoading,error}
     );
}
 


