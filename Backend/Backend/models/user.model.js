import mongoose from "mongoose";

const userShema = new mongoose.Schema(
    {
        email:{
            type:String,
            required:true,
            unique:true
        },
        fullName: {
            type: String,
            required: true
        },
        password : {
            type: String,
            required: true,
            minLengh : 6
        },
       profilePic: {
type: String,
default:""
        },
field: {
    type: String,
    required:true
}
    },
    {timestamps: true}
)
 const User = mongoose.model("User" ,userShema );
 export default User;