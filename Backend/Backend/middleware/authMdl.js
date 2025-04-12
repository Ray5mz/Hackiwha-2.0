import jwt from "jsonwebtoken"
import User from "../models/user.model.js"

export async function authMdl(req,res,next){
try{
const token = req.cookies.jwt;

if(!token){
    return res.status(500).json({message:"error there is no token"});
}
const decoded = jwt.verify(token,process.env.Jwt_SECRET);
if(!decoded){
    return  res.status(500).json({message:"error wrong token"});
}
console.log(decoded)
const user = await User.findById(decoded.userId).select("-password");
req.user = user;
next();
}catch(err){
res.status(500).json({message:err.message})
}
}
