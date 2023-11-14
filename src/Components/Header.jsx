import React from 'react'
import { Link } from 'react-router-dom'

function Header({insideDashboard}) {
  return (
    <div className='position-fixed top-0' style={{backgroundColor:'#90ee90',width:'100%',height:'15vh'}}>
        <Link to={'/'} style={{textDecoration:'none',color:'white'}}>
           <h1 className='ms-5 fw-bolder text-light'> <i class='fa-brands fa-stack-overflow fa-bounce'></i> Project Fair</h1>
         </Link> 
         {insideDashboard &&
          <div><button style={{marginLeft:'85rem'}} className='btn btn-warning ' >Log Out</button></div>}     
    </div>

  )
}

export default Header