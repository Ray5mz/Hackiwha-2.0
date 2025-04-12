import mongoose from "mongoose";

const publicationShema = new mongoose.Schema({
    author: {type: mongoose.Schema.Types.ObjectId , ref: "User"},
    title : {
        type:String,
    required: true,
    },
    image:{
        type:String,
        
    },
    description : {
        type:String,
    },
    jaime:[{
        type: mongoose.Schema.Types.ObjectId ,
         ref: "User",
        required: true
    }],
    commentaire: [
       {
        text: {
type:String,
required: true,
        },
        author:{
type : mongoose.Schema.Types.ObjectId,
ref: "User",
required: true,
        }
    }
],
    field:{
        type: String,

    }

}, {timestamps: true});
 const Publication = mongoose.model("Publication" ,publicationShema );
 export default Publication;