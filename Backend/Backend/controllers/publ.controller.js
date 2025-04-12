import Publication from "../models/publication.models.js";
import User from "../models/user.model.js";
import cloudinary from "../lib/cloudinary.js";

export async function getPost(req,res) {
    
}

export async function createPost(req, res) {
    try {
        const { title , description } = req.body;
        let {image} = req.body; 
        const userId = req.user._id
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (!title ) {
            return res.status(400).json({ message: "You must provide a title and an image" });
        }

    if(image){
        const uploadRes = await cloudinary.uploader.upload(image);
        img=uploadRes.secure_url
    }
        

        const newPub = new Publication({
            author: userId,
            title,
            image:image,
            description
        });

        await newPub.save();

        return res.status(201).json({
            success: true,
            message: "Post created successfully",
            post: newPub
        });
    } catch (error) {
        console.error("Error creating post:", error);
        return res.status(500).json({ message: "Internal server error", error });
    }
}

export async function deletePost(req,res) {
    
}
export async function commentsPost(req,res) {
    try{
        const {text} = req.body;
        const userId = req.user._id;
        const postId = req.params.id;
        const post = await Publication.findById(postId);
        if(!post){
            return res.status(401).json({message:"post not found"})
        };
    const comment = {author: userId , text, }
    post.commentaire.push(comment);
    await post.save();
    res.status(201).json({message : "commentaire aded" , data: post})
    } catch(err){
return res.status(500).json({message: err.message})
    }
   

}