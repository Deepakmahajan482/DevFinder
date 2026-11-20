import validator from "validator";
export const validateSignupData=(req)=>{
    const {firstName,lastName,email,password,gender,age}=req.body;
    if(!firstName || !lastName){
      throw new Error("Name is not valid");
    }
    else if(firstName.length<4 && firstName.length>50){
      throw new Error("First Name should be 4 to 50 characters");
    }
    else if(lastName.length<4 && lastName.length>50){
      throw new Error("Last Name should be 4 to 50 characters");
    }
    else if(!validator.isEmail(email)){
      throw new Error("Email is not valid");
    }
    else if(!validator.isStrongPassword(password)){
      throw new Error("Please enter a strong password");
    }
    else if(Number(age)<18){
      throw new Error("Please enter the age greater than 18 ")
    }
}