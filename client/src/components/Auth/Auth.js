import React, { useState } from 'react'
import '../../components/Form/form.css'
import TextField from '@mui/material/TextField';
import './auth.css'
import { useDispatch } from 'react-redux';
import { signInFun, signUpFun } from '../../actions/auth';
import { useNavigate } from 'react-router-dom';


const Auth = () => {
    const dispatch=  useDispatch()
    const navigate=useNavigate()
    const [sign,setSign]=useState({email:'',password:''})
    const [sigup,setSignup]=useState({firstName:'',email:'',password:'',lastName:''})

    const [heading,setHeading]=useState("Sign In")
    const [flag,setFlag]=useState(true)
    const signIn=(e)=>{
        e.preventDefault()
        dispatch(signInFun(sign,navigate))
        // navigate('/')



    }
    const googleLogin=()=>{

    }
    const register=()=>{
        console.log("Register")
        setFlag(!flag)
        setHeading("Sign Up")
    }
    const signing=()=>{
        setFlag(!flag)

        setHeading("Sign In")
        // dispatch(sigup,history)


        
    }
    const signUp=(e)=>{
        e.preventDefault()
        console.log(sigup)
        dispatch(signUpFun(sigup,setFlag,flag,setHeading))

        
    }
    return (
        <div className='auth-main'>
            { flag && <div className='main-form signIn'>
                <div className='heading mb'>{heading}</div>

                <div className='content'>
                    <form onSubmit={signIn}>
                        <div className="mb"><TextField type="email" fullWidth label="email" id="email" size="small" value={sign.email} onChange={(e) => setSign({ ...sign, email: e.target.value })} /></div>
                        <div className="mb"><TextField type="password" fullWidth label="password" id="password" size="small" value={sign.password} onChange={(e) => setSign({ ...sign, password: e.target.value })} /></div>

                        <button type='submit' className='btn btn-primary submit' >Login</button>
                        <br />
                        <button className='btn btn-danger reset' type='button' onClick={googleLogin} >Google Login</button>
                        <span>Dont have Account? <span onClick={register} style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>Register</span></span>

                    </form>

                </div>


            </div>}
            { !flag && <div className='main-form signIn'>
                <div className='heading mb'>{heading}</div>

                <div className='content'>
                    <form onSubmit={signUp}>
                    <div className="mb"><TextField type="text" fullWidth label="Enter First Name" id="firstName" size="small" value={sigup.firstName} onChange={(e) => setSignup({ ...sigup, firstName: e.target.value })} /></div>
                    <div className="mb"><TextField type="text" fullWidth label="Enter Last Name" id="lastName" size="small" value={sigup.lastName} onChange={(e) => setSignup({ ...sigup, lastName: e.target.value })} /></div>

                        <div className="mb"><TextField type="email" fullWidth label="Enter email" id="email" size="small" value={sigup.email} onChange={(e) => setSignup({ ...sigup, email: e.target.value })} /></div>
                        <div className="mb"><TextField type="password" fullWidth label="Enter password" id="password" size="small" value={sigup.password} onChange={(e) => setSignup({ ...sigup, password: e.target.value })} /></div>

                        <button type='submit' className='btn btn-primary submit' >Sign Up</button>
                        <br />
                        <button className='btn btn-danger reset' type='button' onClick={googleLogin} >Google Login</button>
                        <span>Have Account? <span onClick={signing} style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>Sign In</span></span>

                    </form>

                </div>


            </div>}

        </div>
    )
}

export default Auth