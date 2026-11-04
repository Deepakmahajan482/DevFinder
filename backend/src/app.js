import express from 'express';
const app=express();


app.use("/test",(req,res)=>{
  res.send("Hello from the server");
})

app.listen(3000,()=>{
  console.log("Backend is running on 3000 port");
})



