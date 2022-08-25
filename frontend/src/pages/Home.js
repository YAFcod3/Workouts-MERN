import { useEffect} from "react";
//import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

//component
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

//necesito por la autorizacion:
import {useAuthContext} from '../hooks/useAuthContext'







const Home = () => {


    //const [workouts, setWorkouts] = useState(null)

    const {workouts,dispatch}=useWorkoutsContext()

    const {user}=useAuthContext()

    

    useEffect(() => {

       const fetchWorkouts = async ()=>{

            const response = await fetch('http://localhost:4000/api/workouts',{
                headers:{
                    'Authorization':`Bearer ${user.token}`,
                }
            })
            const json = await response.json()

            if(response.ok){
            // setWorkouts(json)
            //tengo disponible el dispatch:
            dispatch({type:'SET_WORKOUTS',payload:json})
            }
       }



       if(user){
        fetchWorkouts()

       }

       

    }, [dispatch,user])



    

    return ( 
        <div className="home" >
            <div className="workouts">
                {workouts && workouts.map((workout)=> (
                    <WorkoutDetails key={workout._id} workout={workout}/>

                ))}
            </div>
            <WorkoutForm/>

        </div>
     );
}
 
export default Home;