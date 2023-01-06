import *as express from "express"
import "dotenv/config"
import {pool as connection} from "./lib/db sql/db"
import *as cors from"cors"
const port = JSON.parse(process.env.PORT);
const app = express();
app.use(cors());
app.get("/",async(req,res)=>{
    const resp =  connection.query("SELECT * from animales;", function(err, rows, fields) {
        res.json(rows)
     }
     )
    
     
})
app.post("/crear-animal",(req,res)=>{
    const {animal}= req.query
    connection.query(`INSERT into animales (nombre) VALUE ("${animal}");`, function(err, rows, fields) {
        res.json({err, rows, fields})
     })
})
app.listen(port,()=>{
    console.log("API : http://localhost:"+port+"/");
})
