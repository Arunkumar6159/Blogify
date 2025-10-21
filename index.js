
const express=require("express");
const path=require("path");
const app=express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
const port=3000;
const users=[{username:"arun",
    password:"Arun@123",
    firstName:"Arun",
    lastName:"kumar",
    email:"arun@123",
    password:"arun123"
}]
app.listen(port,()=>{
    console.log(`listening on ${port}`);
})
app.get("/blogify",(req,res)=>{
    res.render("home");
})
app.get("/blogify/signup",(req,res)=>{
    res.render("signup");
})
app.get("/blogify/login",(req,res)=>{
    res.render("login");
})
app.post("/blogify/signuppage",(req,res)=>{
     let {username,password,lastName,firstName,email,anotherpassword}=req.body;
     let newData={username,password,lastName,firstName,email,anotherpassword};
     users.push(newData);
     res.render("home");
})
app.get("/blogify/find",(req,res)=>{
    res.render("allusers",{users});
})
