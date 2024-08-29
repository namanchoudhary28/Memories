import React, { useEffect } from 'react'
import Post from './Post'
import '../Post/post.css'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../store/postSlice'
import { useLocation } from 'react-router-dom'
const Posts = () => {

    const dispatch=useDispatch()
    const postArray=useSelector(state => state.post)
    useEffect(()=>{
        
        dispatch(getPosts())
    },[])


  return (
    <>
    <div className='flex'>
    {postArray.map((item,index)=>{
        return <div key={item._id}>
            <Post message={item.message} id={item._id} creator={item.creator} title={item.title} selectedFile={item.selectedFile} />


        </div>
    })}

    </div>
    </>
  )
}

export default Posts