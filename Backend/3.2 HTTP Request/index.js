import express from "express";

const app=express();
const port=3000;

app.get("/",(request,response)=>{
response.send("<h1>Hello, World!</h1>");
});

app.get("/about",(request,response)=>{
    response.send("<h1>About Page</h1>");
    });
    
app.get("/contact",(request,response)=>{
    response.send("<h1>Contact Page</h1>");
    });

app.listen(port,()=>{
console.log(`Server is running on port ${port}.`);
});