import jwt from "jsonwebtoken"
export const generateToken = (userId , res)=>{

    const token = jwt.sign({userId} , process.env.Jwt_SECRET , {
        expiresIn: "7d"
    });
    res.cookie("jwt" , token , {
        maxAge: 7*24*60*60*1000,
        httpOnly: true,
        sameSite:"strict",
        Secure: process.env.NODE_ENV !=="development"
    })
    return token
}