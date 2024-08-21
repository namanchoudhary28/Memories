import React from 'react'
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
 
const Post = (props) => {
    const dispatch=useDispatch()
    const sendData=(value)=>{
        dispatch(update(value))


    }
    const deletePos=(value)=>{
      dispatch(deletePost(value))

    }
  return (
    <>
     <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" onClick={()=>{deletePos(props)}}>
            <DeleteIcon />
          </IconButton>
        }
        title={props.title}
        subheader={props.creator}
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.message}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share" onClick={()=>sendData(props)}>
          <EditIcon />
        </IconButton>
 
      </CardActions>
     
    </Card>
    
    
    </>
  )
}

export default Post