import * as api from '../api'
import { useNavigate } from 'react-router-dom'
import { login, logout } from '../store/authSlice'


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
        const res = await api.signIn(data)
        console.log(res)
        dispatch(login(res.data))
        navigate('/')

 
  
        
        
    } catch (error) {
        console.log(error)
        
    }
}

