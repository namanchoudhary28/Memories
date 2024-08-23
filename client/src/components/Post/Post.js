import React, { useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { update } from '../../store/editSlice';
import { deletePost } from '../../store/postSlice';
import { useLocation } from 'react-router-dom';
 
const Post = (props) => {
  let user = JSON.parse(localStorage.getItem('profile'));

  const location=useLocation()
    const dispatch=useDispatch()
    const sendData=(value)=>{
        dispatch(update(value))


    }
    const deletePos=(value)=>{
      dispatch(deletePost(value))

    }
    useEffect(()=>{
      user = JSON.parse(localStorage.getItem('profile'));


   },[location])
  return (
    <>
     <Card sx={{ maxWidth: 250,minWidth:250, }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {props.creator[0]}
          </Avatar>
        }
        action={
          <IconButton disabled={!user?.token} aria-label="settings" onClick={()=>{deletePos(props)}}>
            <DeleteIcon />
          </IconButton>
        }
        title={props.title}
        subheader={props.creator}
      />
      <CardMedia
        component="img"
        height="194"
        image={props.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'}
        alt={props.selectedFile.length}
      />
      <CardContent>
        <Typography sx={{ height: 100,
         overflow: "auto",
         wordWrap: "break-word",
  


         }}  variant="body2" color="text.secondary">
          {props.message}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton disabled={!user?.token} aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton disabled={!user?.token} aria-label="share" onClick={()=>sendData(props)}>
          <EditIcon />
        </IconButton>
 
      </CardActions>
     
    </Card>
    
    
    </>
  )
}

export default Post