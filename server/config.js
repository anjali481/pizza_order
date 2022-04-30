const { bgRed } = require('colors')
const mongoose =require('mongoose')

require('colors')

const connectDB =async ()=>{
  try{

    const url=process.env.MONGO_URI

    const conn=await mongoose.connect(

        url,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
            useCreateIndex:true
        }
    )

    console.log(`mongodb dababase connected  ${conn.connection.host}`)

  }
  catch(error){

    console.log(`error ${error.message}`);


  }


};

module.exports=connectDB;