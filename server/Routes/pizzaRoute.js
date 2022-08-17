const express= require('express');

const router=express.Router();
const pizzaModel=require('../Model/pizzaModel')

//get request 
router.get('/getAllPizza',async (req,res)=>{

    try{

        const pizzas=await pizzaModel.find({})
        res.send(pizzas)
        console.log(res);

    }

    catch(error){

        res.json({message:error})

    }

});

module.exports=router;