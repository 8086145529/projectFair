import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { tokenAuthorisationContext } from '../Contexts/TokenAuth'

function Header({insideDashboard}) {
  const {isAuthorized,setIsAuthorized} = useContext(tokenAuthorisationContext)
  const navigate = useNavigate()
  const handleLogout = () =>{
    // remove all existing user detail from browser
    sessionStorage.removeItem("existingUser")
    sessionStorage.removeItem("token")
    setIsAuthorized(false)
    // navigate to landing page
    navigate('/')
  }
  return (
    <div className='position-fixed top-0' style={{backgroundColor:'#90ee90',width:'100%',height:'15vh'}}>
        <Link to={'/'} style={{textDecoration:'none',color:'white'}}>
           <h1 className='ms-5 fw-bolder text-light'> <i class='fa-brands fa-stack-overflow fa-bounce'></i> Project Fair</h1>
         </Link> 
         {insideDashboard &&
          <div><button onClick={handleLogout} style={{marginLeft:'85rem'}} className='btn btn-warning ' >Log Out</button></div>}     
    </div>

  )
}

export default Header
