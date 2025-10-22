
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
    anotherpassword:"arun123"
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
    res.render("login.ejs");
})
app.post("/blogify/signuppage",(req,res)=>{
     let {username,password,lastName,firstName,email,anotherpassword}=req.body;
     let newData={username,password,lastName,firstName,email,anotherpassword};
     users.push(newData);
     res.render("home");
})
app.post("/blogify/login",(req,res)=>{
    let {username,password}=req.body;
    let loginDetails={username,password};
    const user=(users.find((a)=>a.username===loginDetails.username));
    if(!user)
        res.send('username not found');
    else
    {
        if(user.password!==loginDetails.password)
            res.send('wrong password');
        else
        {
            res.render("allusers",{users});
        }
    }
})
app.get("/blogify/find",(req,res)=>{
    res.render("allusers",{users});
})
