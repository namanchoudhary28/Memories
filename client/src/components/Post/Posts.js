import React, { useEffect } from 'react'
import Post from './Post'
import '../Post/post.css'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../store/postSlice'
const Posts = () => {
    const dispatch=useDispatch()
    const postArray=useSelector(state => state.post)
    useEffect(()=>{
        console.log("hello")
        
        dispatch(getPosts())
    },[])
  return (
    <>
    <div>Posts</div>
    <div className='flex'>
    {postArray.map((item,index)=>{
        return <div key={item._id}>
            <Post message={item.message} id={item._id} creator={item.creator} title={item.title} />


        </div>
    })}

    </div>
    </>
  )
}

export default Posts