import jwt from "jsonwebtoken";
import { User } from "../models/User.js";

export const userAuth=async(req,res,next)=>{
  try{
  // read the token from the request cookie
  const {token}=req.cookies;
  if(!token){
    throw new Error("Token is not Valid");
  }
  const decodedObj=await jwt.verify(token,"deepakDiGalBaatAA");
  const {_id}=decodedObj;
  const user=await User.findById(_id);
  if(!user){
    throw new Error("User not found");
  }
  req.user=user;
  next();
  // validate the token 
  // find the user
}
catch(err){
  res.status(400).send("Error: "+err.message);
}
};
