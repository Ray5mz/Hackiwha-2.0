import User from "../models/user.model.js";
import bcrypt from "bcryptjs"
import { generateToken } from "../lib/Utils.js";
import cloudinary from "../lib/cloudinary.js";
export const signUp =  async (req , res)=>{
const {email , fullName , password ,profilePic , field } = req.body;
try{
if(password.lengh <=0){
    return res.status(401).json({message: "password must have more 6 char"})
}
const user = await User.findOne({email})
if(user){
      return res.status(401).json({message: "email Already exists"})
}
const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(password,salt)
const newUser = new User ({
    email,
    fullName,
    field,
    password: hashedPassword
})
if(newUser){
    generateToken(newUser._id , res);
    await newUser.save();
    res.status(201).json({email:newUser.email , field: newUser.field , fullName:newUser.fullName})
}
} catch(err){
    console.log("error on controller token")
res.status(500).json({message: err.message|| "error connecting try again later"})
}
}
export const login = async (req,res)=>{
    const {email , password} = req.body;
    try{
const user = await User.findOne({email});
if(!user){
    return res.status(401).json({message:"invalid informations"});
}
const isPasswordCorrect = await bcrypt.compare(password , user.password);
if (!isPasswordCorrect){
    return res.status(401).json({message:"invalid informations"});
}
generateToken(user._id,res);
 res.status(201).json({email:user.email ,fullName: user.fullName , field:user.field
 })
    } catch(err){
        res.status(500).json({message:err.message||"there is a login error"})
    }
}
export async function logout(req,res) {
    try{
        res.cookie("jwt" , "" , {maxAge : 0});
        res.status(201).json({message :"logout sucssess"})
    } catch(err){
        res.status(500).json({message :"error in logout"})
    }
 
}
export async function updateProfile(req,res) {
    try{
const {profilePic} = req.body;
const userId = req.user._id;
if (!profilePic){
    res.status(400).json({message: "image not found"})
}
const uploadRes = await cloudinary.uploader.upload(profilePic);
const updateUser = await User.findByIdAndUpdate(userId,{profilePic:uploadRes.secure_url} , {new:true});
res.status(201).json(updateUser)
    } catch(err){
        res.status(500).json({message: "error updating the image"})
    }
}
