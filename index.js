import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import postRoutes from './routes/posts.js'
import authRoutes from './routes/auth.js'
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const app=express()
app.use(cors())

app.use(bodyParser.json({limit:'30mb',extended:true}))
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}))
app.use('/posts',postRoutes)
app.use('/auth',authRoutes)

const __dirname = path.dirname(fileURLToPath(import.meta.url));
//now please load my static html and css files for my express app, from my /dist directory
app.use(express.static(path.join(__dirname ,'./client/build')));
app.get('*',function(req,res){
res.sendFile(path.join(__dirname,'./client/build/index.html'))
});
const CONNECTION_URL=process.env.CONNECTION_URL
const PORT=process.env.PORT 

mongoose.connect(CONNECTION_URL)
.then(()=>app.listen(PORT,()=>
    console.log(`Server running on ${PORT}`)
))
.catch((error)=> console.log(error))