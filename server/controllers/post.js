import PostMessage from "../models/postMessage.js"

export const getPost=async (req,res)=>{
    try {
        const postMessages=await PostMessage.find()
        res.status(201).json(postMessages)
        
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

export const createPost=async (req,res)=>{
    const { id, ...postData } = req.body; // Destructure id from body and separate other data

    try {
        let post;

        if (id) {
            // If id exists, update existing entry
            post = await PostMessage.findByIdAndUpdate(id, postData, { new: true });
            if (!post) {
                return res.status(404).json({ message: 'Post not found' });
            }
        } else {
            // If id doesn't exist, create new entry
            post = new PostMessage(postData);
            await post.save();
        }

        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    // const post = req.body;
    // console.log(req.body)
    // const newPost =new PostMessage(post)
    // console.log(newPost)
    // try {
    //     await newPost.save()
    //     res.status(201).json(newPost)

        
    // } catch (error) {
    //     res.status(404).json({message:error.message})

    // }
}

export const deletePost=async (req,res)=>{
    const { id, ...postData } = req.body; // Destructure id from body and separate other data
    console.log('hellooo guys',req.body)
    try {
        const deletedPost = await PostMessage.findByIdAndDelete(id);
        if (!deletedPost) {
          return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json({ message: 'Post deleted successfully', deletedPost });
      } catch (error) {
        console.error('Error deleting post:', error.message);
        res.status(500).json({ message: 'Server error' });
      }
    
}

export const getPostsBySearch = async (req, res) => {
    console.log("hi")
    const { searchQuery, tags } = req.query;

    try {
        const title = new RegExp(searchQuery, "i");

        const posts = await PostMessage.find({ $or: [ { title }, { tags: { $in: tags.split(',') } } ]});

        res.json({ data: posts });
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}