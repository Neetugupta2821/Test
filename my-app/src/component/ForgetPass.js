import React, { useState } from 'react'
import axios from 'axios';

function ForgetPass() {
    const [email,setemail]=useState("")
const handeReset=(e)=>{
    e.preventDefault();
    axios.post("http://192.168.1.70:5000/api/forgotPassword",{
        email:email
    }).then((response)=>{
        console.log(response.data)
        alert("Check your email a password reset email was sent")
    }).catch((error)=>{
        console.log(error.message)
    })


}
    return (
        <>
            <div className='login_box'>
                <h3>LOGIN<span className='color_span'> SEA-ENGINEERING</span></h3>
                <p>Access to our dashboard</p>
                <form>
                    <input type='text' placeholder='Email Address' onChange={(e)=>setemail(e.target.value)}></input>
                    <button className='Login_btn' onClick={handeReset}>Login</button>
                </form>

            </div>
        </>
    )
}
export default ForgetPass;
