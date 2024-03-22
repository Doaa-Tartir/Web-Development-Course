import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app=express();
const port=3000;
const pwd="ILoveProgramming";

app.use(bodyParser.urlencoded({extended:true}));
//or use
// app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
res.sendFile(__dirname+"/public/index.html");
});

app.post("/check",(req,res)=>{
if(req.body["password"]==pwd){
    console.log(req.body["password"]);
res.sendFile(__dirname+"/public/secret.html");
}
else{
res.sendFile(__dirname+"/public/index.html");
//or use 
// res.redirect("/");
}
});

app.listen(port, ()=>{
    console.log(`Listening on port ${port}.`);
});