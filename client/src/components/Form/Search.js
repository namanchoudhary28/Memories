import React, { useState } from 'react'
import ChipInput from 'material-ui-chip-input'
import { TextField } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPostsBySearch } from '../../store/postSlice';

const Search = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const [smemo,setmemo]=useState('')
    const [tags,setTags]=useState([])
    const handleAddChip=(chip)=>{
        setTags([...tags,chip])


    }
    const handleDeleteChip=(chip)=>{
        let newArr=tags.filter((item)=>{
            return item !== chip

        })
        setTags(newArr)

    }
    const handleSubmit=()=>{
        console.log(smemo,tags)
        if (smemo.trim() || tags){
            console.log(smemo.trim())
            let tag=tags.join(',')
            console.log(tag)
            dispatch(getPostsBySearch({smemo,tags:tag}))
            navigate(`/posts/search?searchQuery=${smemo || 'none'}&tags=${tag}`);


        }
        else{
            navigate('/')
        }
        
    }
  return (

    <div className='search-div'>

   
        <div  className="mb"><TextField fullWidth label="Search memories" id="memories" size="small"  value={smemo} onChange={(e)=>setmemo(e.target.value)} /></div>
        <div  className="mb">
          <ChipInput
                style={{ margin: '10px 0' }}
                value={tags}
                onAdd={(chip) => handleAddChip(chip)}
                onDelete={(chip) => handleDeleteChip(chip)}
                label="Search Tags"
                variant="outlined"
              />                
        </div>
        <div><button onClick={handleSubmit} className='btn btn-primary submit' >Submit</button></div>


        
    </div>
  )
}

export default Search