import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column' style={{width:'100%',height:'300px',backgroundColor:'#90ee90'}}>
    <div className="footer-content d-flex justify-content-evenly w-100 flex-wrap">
        <div className='website d-flex flex-column' style={{width:'400px'}}>
            <h3 style={{height:'50px'}}> <i className="fa-solid fa-cloud-arrow-up"></i>Project Fair</h3>
        Bootstrap
Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.
Code licensed MIT, docs CC BY 3.0.
Currently v5.3.2.
        </div>
        <div className='d-flex flex-column'>
            <h3 style={{height:'50px'}}>Links</h3>
            <Link to={"/ "} style={{textDecoration:"none"}}>Home</Link>
            <Link to={"/login "} style={{textDecoration:"none"}}>Login</Link>
            <Link to={"/register"} style={{textDecoration:"none"}}>Register</Link>
        </div>
        <div className='d-flex flex-column'>
        <h3 style={{height:'50px'}}>Guides</h3>
        <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:"none"}}>React</Link>
        <Link to={'https://bootswatch.com/'}style={{textDecoration:"none"}}>React Bootstrap</Link>
        <Link to={'https://bootswatch.com/'} style={{textDecoration:"none"}}>Routing</Link>
        </div>
        -
    </div>
    <p>Copyright © 2023 React Bootstrap. Built with Docusaurus.</p>

</div>
  )
}

export default Footer