import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/database.js';
import cookieParser from "cookie-parser";
import authRouter from './routes/auth.js';
import profileRouter from './routes/profile.js';
import requestRouter from './routes/request.js';
import userRouter from './routes/user.js';
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

app.use('/auth',authRouter);
app.use('/profile',profileRouter);
app.use('/request',requestRouter);
app.use('/user',userRouter);

app.listen(3000,()=>{
  console.log("Backend is running on 3000 port");
})



