
const express=require("express");
const path=require("path");
const app=express();
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
const port=3000;
app.listen(port,()=>{
    console.log(`listening on ${port}`);
})
app.get("/Blogify",(req,res)=>{
    res.render("home");
})
app.get("/Blogify/login",(req,res)=>{
    res.render("login");
})
app.get("/Blogify/signup",(req,res)=>{
    res.render("signup");
})