import express from 'express'
import { getPost,createPost, deletePost, getPostsBySearch } from '../controllers/post.js'
import auth from '../middleware.js/auth.js'
const router=express.Router()


router.get('/search', getPostsBySearch);

router.get('/',getPost)
router.post('/create',auth,createPost)
router.post('/delete',auth,deletePost)


export default router;