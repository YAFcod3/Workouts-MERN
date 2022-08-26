import { useAuthContext } from "./useAuthContext"
import {useWorkoutsContext  } from "./useWorkoutsContext"


export const useLogout = () => {

    const {dispatch}=useAuthContext()
    //workouts =>userr
    const{dispatch:workoutDispatch}=useWorkoutsContext()

    const logout = ()=>{
        
        //remove user from storage
        localStorage.removeItem('user')

        //dispatch logout action
        dispatch({type:'LOGOUT'})
         //workouts =>userr
        workoutDispatch({type:'SET_WORKOUTS', payload:null})

    }


    return {logout}
    
}
