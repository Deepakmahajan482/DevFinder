import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/database.js';
import {User} from './models/User.js';
import { validateSignupData } from './utils/validation.js';
import bcrypt from "bcrypt"; 
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import { userAuth } from './middleware/auth.js';
dotenv.config();

const app=express();
app.use(express.json());
app.use(cookieParser());
try{
  connectDB();
  console.log("mongoDb connected successfully");
  
}
catch(err){
  console.log(err);
}

app.post("/signup",async(req,res)=>{
  try{
  // Validation of data
  //encrypt the password
  validateSignupData(req);


  const {firstName,lastName,email,age,password}=req.body;
  const passwordHash=await bcrypt.hash(password,10);

  const user=new User({
    firstName,
    lastName,
    email,
    age,
    password:passwordHash
  }
  );
    await user.save();
    return res.status(200).json({message:"User created successfully"});
  }
  catch(err){
    return res.status(500).json({message:err.message});
  }
})

app.post("/login",async(req,res)=>{
  try{
    const{email,password}=req.body;
    const checkEmail=await User.findOne({email});
    if(!checkEmail){
      return res.status(400).json({
        message:"Invalid Credentials"
      });
    }
    const isPasswordValue=await bcrypt.compare(password,checkEmail.password);
    if(!isPasswordValue){
      return res.status(400).json({
        message:"Invalid Credentials"
      })
    }
    // create a jwt token
    // add the token to cookie and send the response back to the user
    const token=await jwt.sign({_id:checkEmail._id},"deepakDiGalBaatAA",{expiresIn:"7d"});
    res.cookie("token",token,{expires:new Date.now()+8*35000});
    return res.status(200).json({
      message:"User login successfull"
    });
  }
  catch(err){
    return res.status(400).json(err.message);
  }
})

app.get("/profile",userAuth,async(req,res)=>{
  return res.status(200).send("All done")
})

app.post("/sendConnectionRequest",userAuth,async(req,res)=>{
  console.log("Connection send successfully");
  const user=req.user;
  res.status(200).send(user.firstName +" is sending the request");
})



app.listen(3000,()=>{
  console.log("Backend is running on 3000 port");
})



