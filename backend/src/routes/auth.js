import express from 'express';
import {User} from '../models/User.js';
import bcrypt from "bcrypt"; 
import jwt from "jsonwebtoken";
import { validateSignupData } from '../utils/validation.js';

const authRouter=express.Router();

authRouter.post("/signup",async(req,res)=>{
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

authRouter.post("/login",async(req,res)=>{
  try{
    const{email,password}=req.body;
    const checkEmail=await User.findOne({email});
    if(!checkEmail){
      return res.status(400).json({
        message:"Invalid Credentials"
      });
    }
    const isPasswordValue=await checkEmail.validatePassword(password);
    if(!isPasswordValue){
      return res.status(400).json({
        message:"Invalid Credentials"
      })
    }
    // create a jwt token
    // add the token to cookie and send the response back to the user
    const token=await checkEmail.getJWT();
    res.cookie("token",token);
    return res.status(200).json({
      message:"User login successfull"
    });
  }
  catch(err){
    return res.status(400).json(err.message);
  }
})


export default authRouter;