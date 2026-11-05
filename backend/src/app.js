import express from 'express';
const app=express();


app.use("/test",(req,res)=>{
  res.send("Hello from the server");
})

app.use("/hello",[
  (req,res,next)=>{
    console.log("hello from rh1");
    next();
  },
  (req,res,next)=>{
    console.log("hello from rh2");
    next();
  }
],
(req,res)=>{
  res.send("Hello from the server");
})

app.listen(3000,()=>{
  console.log("Backend is running on 3000 port");
})



