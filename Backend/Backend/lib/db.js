import mongoose from "mongoose";
export const connectDb = async ()=>{
    try{
const conn = await mongoose.connect(process.env.MONGODB_URI)
console.log(`dataBase connected : ${conn.connection.host}`)
    } catch(err){
console.log("mongoDb error : "+ err)
    }
}