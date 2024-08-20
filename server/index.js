import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import postRoutes from './routes/posts.js'
import authRoutes from './routes/auth.js'

const app=express()
app.use(cors())

app.use(bodyParser.json({limit:'30mb',extended:true}))
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}))
app.use('/posts',postRoutes)
app.use('/auth',authRoutes)


const CONNECTION_URL='mongodb+srv://react:react123@cluster0.emw32.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const PORT=process.env.PORT || 5000

mongoose.connect(CONNECTION_URL)
.then(()=>app.listen(PORT,()=>
    console.log(`Server running on ${PORT}`)
))
.catch((error)=> console.log(error))