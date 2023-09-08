import React, {useState } from 'react'
import axios from 'axios';
 
import './Login.css'
import { Link} from 'react-router-dom'
 import { useNavigate } from 'react-router-dom';
// import { useHistory} from 'react-router-dom';

function Login() {
    const navigate =useNavigate();
    // const history = useHistory();
    const [email,setEmail] = useState("")
    const [password,setpassword] = useState("")
    function hangelLogin(e) {
        e.preventDefault();
        axios.post("http://192.168.1.70:5000/api/admin/login", {
  email: email,
  password: password,
},
{
  headers: {
      'Content-Type': 'application/json',
  }
}
)
  .then((response) => {
    console.log(response.data);
    if(response?.status===200)
    navigate('/Dashboard')
else
  alert(response?.message)
    // navigate('/dashboard')
  })
  .catch((error) => {
    console.error(error.message); // Check the specific error message for more details
    console.error(error.response); // Check the response data for more information
  });

      }
      
     


    return (
        <>
        <div className='main_type'>
            <div className='login_box'>
                <h3>LOGIN<span className='color_span'> SEA-ENGINEERING</span></h3>
                <p>Access to our dashboard</p>
                <form className='Login_form'>
                    <input type='text' placeholder='Email' className='email_type' onChange={(e) => setEmail(e.target.value)}></input>

                    <input type='text' placeholder='password' className='password_type' onChange={(e) => setpassword(e.target.value)}></input>

                    <Link to="ForgetPass" className='forget_link'>forget password?</Link>

                    <button className='Login_btn' onClick={hangelLogin}>Login</button>

                    <p>Don't have account?<span><Link to="Register">Register</Link></span></p>


                </form>

            </div>
            </div>
        </>
    )
}
export default Login;
