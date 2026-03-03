import express from "express";
import mongoose from "mongoose";

 const app = express();
    app.get("/", (req, res)=>{
        res.send("Hello World")
    })

    app.listen(process.env.PORT || 8000, ()=>{
        console.log(` App is listening on port : ${process.env.PORT}`);
    })


/*import dotenv from "dotenv";    
import connectDB from "./db/connectdb.js";

dotenv.config({
    path: `./env`
})

connectDB();

.then () => 
    app.listen(process.env.PORT || 8000, () => {
        console.log(` App is listening on port : $
            {process.env.PORT}`);
})
.catch((error)=>{
    console.error("Error in connecting database", error)
    throw error;
})*/













 // first methor for commandline
/*import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/indexdb";


dotenv.config({
    path: "./config/config/.env"
})

const app = express(); 

(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`)
        console.log("Database Connected Successfully")
        app.on("error", (error)=>{
            console.app("ERROR",error); 
           throw error;
        })
        
        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    }

    catch(error){
        console.error("Error in connecting database", error)
        throw error;
    }
})()*/
