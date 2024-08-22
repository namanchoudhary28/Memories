import React, { useState } from 'react'
import '../../components/Form/form.css'
import TextField from '@mui/material/TextField';
import './auth.css'

const Auth = () => {
    const [sign,setSign]=useState({email:'',password:''})
    const [sigup,setSignup]=useState({firstName:'',email:'',password:'',lastName:''})

    const [heading,setHeading]=useState("Sign In")
    const [flag,setFlag]=useState(true)
    const signIn=(e)=>{
        e.preventDefault()


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

        
    }
    const signUp=(e)=>{
        e.preventDefault()

        
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
                    <div className="mb"><TextField type="text" fullWidth label="Enter First Name" id="firstName" size="small" value={sigup.firstName} onChange={(e) => setSign({ ...sigup, firstName: e.target.value })} /></div>
                    <div className="mb"><TextField type="text" fullWidth label="Enter Last Name" id="lastName" size="small" value={sigup.lastName} onChange={(e) => setSign({ ...sigup, lastName: e.target.value })} /></div>

                        <div className="mb"><TextField type="email" fullWidth label="Enter email" id="email" size="small" value={sigup.email} onChange={(e) => setSign({ ...sigup, email: e.target.value })} /></div>
                        <div className="mb"><TextField type="password" fullWidth label="Enter password" id="password" size="small" value={sigup.password} onChange={(e) => setSign({ ...sigup, password: e.target.value })} /></div>

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