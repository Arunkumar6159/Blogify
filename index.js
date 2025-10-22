
const express=require("express");
const path=require("path");
const app=express();
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
const port=3000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const users=[{username:"arun",
    password:"Arun@123",
    firstName:"Arun",
    lastName:"kumar",
    email:"arun@123",
    anotherpassword:"arun123"
}]
const posts=[
    {
        id:"123",
        username:"arun",
        blog:"hello world"
    }
]
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
     res.render("Allposts",{posts});
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
            res.render("Allposts",{posts});
        }
    }
})
app.get("/blogify/find",(req,res)=>{
    res.render("allusers",{users});
})
app.get("/blogify/newpost",(req,res)=>{
    res.render("newpost");  
})
app.post("/blogify/newpost",(req,res)=>{
    let {username,blog}=req.body;
    let details={username};
    let user=posts.find((p)=>details.username===p.username);
    if(!user)
        res.send("username not found");
    else{  
    let newpost={username,blog};
    posts.push(newpost);
    res.render("Allposts",{posts});
    }
})
app.get("/blogify/yourpost/:id",(req,res)=>{
    let {id}=req.params;
    let found=posts.find((p)=>id===p.id);
    if(!found)
        res.send("id not found")
    else{
        res.render("yourpost",{found});
    }
})
app.get("/blogify/allposts",(req,res)=>{
    res.render("Allposts",{posts});
})
