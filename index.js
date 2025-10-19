
const express=require("express");
const path=require("path");
const app=express();
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
const port=3000;
app.listen(port,()=>{
    console.log(`listening on ${port}`);
})
app.get("/",(req,res)=>{
    res.send("<h1>hello world</h1>")
})
app.get("/Blogify",(req,res)=>{
    res.render("home");
})