import axios from "axios";


 async function categories(techspecs_base,key,mode="raw"){



    const url=`https://apis.dashboard.techspecs.io/${techspecs_base}/api/category/getAll`;

    const header ={
        Accept:"application/json",
        "x-blobr-key":key
    };



    //PETICION
    const req=await axios.get(url,{headers:header});
    console.log(req)





    if(mode==="raw"){
        return req.data.data;


    }else if(mode==='pretty'){
        try {
            return req.data.data.Category[1]
            
        } catch (error) {
            return req.data.data
        }

    }else{
        return "Modo Invalido"
    }


}

export const tech = {
    
    categories
    
  };