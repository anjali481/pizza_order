import axios from 'axios';

export const getAllPizzas =() => async (dispatch)=>{

    dispatch({type:'GET_PIZZAS_REQUEST'});


    try{
      
        const  res=await axios.get('http://localhost:8080/api/pizzas/getAllPizza')
        console.log(res);
        dispatch({type:'GET_PIZZAS_SUCCESS',payload:res.data})


 

    }

    catch(error){


        dispatch({type:'GET_PIZZAS_FAIL',payload:error})



    }


}