import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import loginimg from '../Assets/access-control-system-abstract-concept_335657-3180.avif'
import { Form } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAPI, registerAPI } from '../Services/allAPI';
import { tokenAuthorisationContext } from '../Contexts/TokenAuth';
function Auth({ register }) {
  const navigate = useNavigate()
  const {isAuthorized,setIsAuthorized} = useContext(tokenAuthorisationContext)
  const [userData, setUserData] = useState({
    username: "", email: "", password: ""
  })
  const isRegisterForm = register ? true : false // means registerinte value true or false aakam.ith vech nammal jsxil registerinte value true aanenkil chilath display cheyukka enn kodukkum.ee registerinte value true aavunnath,user /register path select cheyumbol aan.aa path alla select cheythath enkil register false aayirikum.

  const handleLogin = async(e) =>{
    e.preventDefault()
    const {email,password} = userData
    if (!email || !password) {
      toast.info("Please fill the form completely!!!")
    } else {
      console.log(userData);
      const result = await loginAPI(userData)
      if (result.status === 200) {
        // toast.success(`${result.data.username} has registered successfully !!!`)
        sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
        sessionStorage.setItem("token",result.data.token)
        setUserData({
          email: "", password: ""
        })
        setIsAuthorized(true)
        navigate('/')
      } else {
        toast.warning(result.response.data)
        console.log(result);
      }

    }
    
  }


  const handleRegister = async (e) => {
    e.preventDefault()
    const { username, email, password } = userData
    if (!username || !email || !password) {
      toast.info("Please fill the form completely!!!")
    } else {
      const result = await registerAPI(userData)
      if (result.status === 200) {
        toast.success(`${result.data.username} has registered successfully !!!`)
        setUserData({
          username: "", email: "", password: ""
        })
        navigate('/login')
      } else {
        toast.warning(result.response.data)
        console.log(result);
      }

    }
  }
  return (
    <div style={{ width: '100%', height: '100vh' }} className='d-flex justify-content-center align-items-center'>
      <div className='container w-75'>
        {/* Link is an inline element that takes the space only it wanted and when it combines a div with bg-success,both of them placed in a line.so when this two is placed inside a div with width 75%,the div takes another line */}
        <Link to={'/'} style={{ textDecoration: 'none', color: 'blue' }}><i class="fa-solid fa-arrow-left"></i>Back to Home</Link>
        <div style={{ height: '600px' }} className='card shadow p-5 bg-success'>
          <div className='row align-items-center'>
            <div className="col-lg-6">
              <img style={{ height: '500px' }} src={loginimg} alt="" />
            </div>
            <div className="col-lg-6">
              <div className='d-flex align-items-center flex-column'>
                <h1 className='fw-bolder text-light mt-2'><i class='fa-brands fa-stack-overflow fa-bounce'></i>Project Fair</h1>
                {/* <h5> inte ullil isRegisterForm true aanenkil 'Sign up to your Account' display cheyuka (indicates Register Form), false annenkil 'Sign In to your Account' display cheyuka (indicates Login form*/}
                <h5 className='fw-bolder text-light mt-2 pb-3'>
                  {
                    isRegisterForm ? 'Sign up to your Account' : 'Sign In to your Account'
                  }
                </h5>
                <Form className='text-light w-100'>
                  {/* Form taginte ullil athyam vendath Usernameinte box aan.but ath registerformil mathram mathi.so isRegisterForm true aanenkil,Form.Group display cheyan parayuka. if condition mathram koduthal mathi else venda. athukond nammal && kodukkunnnu.  */}
                  {
                    isRegisterForm &&
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Control type="text" placeholder="Username" value={userData.username} onChange={e => setUserData({ ...userData, username: e.target.value })} />
                    </Form.Group>
                  }
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter Email ID" value={userData.email} onChange={e => setUserData({ ...userData, email: e.target.value })} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicpswd">
                    <Form.Control type="password" placeholder="Enter Password" value={userData.password} onChange={e => setUserData({ ...userData, password: e.target.value })} />
                  </Form.Group>
                  {
                    isRegisterForm ?
                      <div>
                        <button onClick={handleRegister} className='btn btn-light mb-3'> Register </button>
                        <p>Already have an Account?Click here to <Link style={{ color: 'black' }} to={'/login'}>Login</Link></p>
                      </div> :
                      <div>
                        <button onClick={handleLogin} className='btn btn-light mb-2'>Login </button>
                        <p>New User?Click here to <Link style={{ color: 'black' }} to={'/register'}>Register</Link></p>
                      </div>

                  }


                </Form>
              </div>
            </div>

          </div>

        </div>
      </div>
      <ToastContainer position="top-right" theme='colored' autoClose={5000} />
    </div>

  )
}

export default Auth

