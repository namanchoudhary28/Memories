import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import '../Form/form.css'
import FileBase from 'react-file-base64'
import { useDispatch,useSelector } from 'react-redux';
import { add } from '../../store/postSlice';
import { createPost } from '../../store/postSlice';


const Form = () => {
  const dispatch=useDispatch()
  const [heading,setHeading]=useState("Create a Memory")
  const formEditData=useSelector(state => state.edit)

    const [content,setContent]=useState({title:'',message:'',creator:'',tags:'',selectedFile:'',id:''})

    const handleSubmit=(e)=>{
      e.preventDefault()
      dispatch(createPost(content))

      console.log(content)

    }
    const resetFun=()=>{
      setHeading("Create a Memory")
      setContent({title:'',message:'',creator:'',tags:'',selectedFile:'',id:''})

        
    }
    useEffect(() => {
      if(formEditData.id){
        setHeading(formEditData.heading)
        setContent({title:formEditData.title,message:formEditData.message,creator:formEditData.creator,tags:formEditData.tags,selectedFile:formEditData.selectedFile,id:formEditData.id})

      }
      console.log(formEditData)
    }, [formEditData])
    
  return (
    <div className='main'>
        <div className='heading'>{heading}</div>

        <div className='content'>
        <form onSubmit={handleSubmit}>
    <div  className="mb"><TextField fullWidth label="creator" id="creator" size="small"  value={content.creator} onChange={(e)=>setContent({...content, creator:e.target.value})} /></div>
    <div  className="mb"><TextField fullWidth label="title" id="creator" size="small"   value={content.title} onChange={(e)=>setContent({...content, title:e.target.value})} /></div>
    <div  className="mb"><TextField fullWidth label="message" id="creator" size="large"   value={content.message} onChange={(e)=>setContent({...content, message:e.target.value})} /></div>
    <div  className="mb"><TextField fullWidth label="tags" id="creator" size="small" value={content.tags} onChange={(e)=>setContent({...content, tags:e.target.value})} /></div>
    <div className='mb'>
      <FileBase 
        type="file"
        multiple={false}
        onDone={({base64})=>setContent({...content,selectedFile:base64})}
      />

      
    </div>
    <button type='submit' className='btn btn-primary submit' >Submit</button>
    <br/>
    <button  className='btn btn-danger reset' type='button' onClick={resetFun} >Reset</button>

        </form>

        </div>


    </div>
  )
}

export default Form