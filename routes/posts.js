import express from 'express'
import { getPost,createPost, deletePost } from '../controllers/post.js'
const router=express.Router()

router.get('/',getPost)
router.post('/create',createPost)
router.post('/delete',deletePost)


export default router;