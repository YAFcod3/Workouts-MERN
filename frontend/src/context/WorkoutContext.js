import { createContext, useReducer } from "react";


//CONTEXT
export const WorkoutsContext = createContext()



//FUNC DEL REDUCER
export const workoutsReducer = (state,action)=>{
    switch(action.type){

        case 'SET_WORKOUTS':
            return {workouts:action.payload}                

        case 'CREATE_WORKOUT':                              //m ayuda tamb en q ya no tengo q rend paq aparewzca el new create 
            return {workouts: [action.payload, ...state.workouts]}

        case 'DELETE_WORKOUT':
            return {
                workouts: state.workouts.filter((w)=> w._id !== action.payload._id)
            }    
         
        default:
            return state    
    }

}








//PROVIDER
export const WorkoutsContextProvider= ({children})=>{

    //HOOK REDUCER
    const [state,dispatch]=useReducer(workoutsReducer,{workouts:null})  //inicializo workouts en null o ""




    
    //RETURN
    return(
        <WorkoutsContext.Provider value={{...state,dispatch}}>
            {children}
        </WorkoutsContext.Provider>
    )
}