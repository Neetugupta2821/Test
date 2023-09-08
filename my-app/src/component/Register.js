import React from 'react'
 
  function Register(props) {
  return (
    <>
    <div className='main_type'>
    <div className='login_box'>
        <h3>LOGIN<span className='color_span'> SEA-ENGINEERING</span></h3>
        <p>Access to our dashboard</p>
        <form>
          <div>
          <input type="text" placeholder='first name'></input>
          <input type="text" placeholder='last name '></input>
          </div>
        <input type='text' placeholder='Email Address'></input>
        <div>
          <input type="text" placeholder='password'></input>
          <input type="text" placeholder='conform password '></input>
          </div>
          <input type="checkbox"/>
         <label for="vehicle1"> I  agree to mentoring<span><a href='#'>Privacy Policy</a>&<a href="#">Terms</a></span></label>
        </form>

    </div></div>
    </>
  )
}
export default Register;
