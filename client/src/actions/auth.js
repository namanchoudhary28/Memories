import * as api from '../api'
import { useNavigate } from 'react-router-dom'


export const signUpFun=(data,setFlag,flag,setHeading)=>async(dispatch)=>{
    try {
        // console.log(data)
        const {value} = await api.signUp(data)
        setFlag(!flag)
        setHeading("Sign In")

        
        
    } catch (error) {
        console.log(error)
        
    }
}

export const signInFun=(data,navigate)=>async(dispatch)=>{
    try {
        // console.log(data)
        const {value} = await api.signIn(data)
        navigate('/')
        console.log(value)

  
        
        
    } catch (error) {
        console.log(error)
        
    }
}