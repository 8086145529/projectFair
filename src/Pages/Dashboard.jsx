import React from 'react'
import Header from '../Components/Header'
import { Col, Row } from 'react-bootstrap'
import MyProjects from '../Components/MyProjects'
import Profile from '../Components/Profile'

function Dashboard() {
  // login cheytha aalk mathraman Home pageil "Start to Explore" button maariyitt "manage your project" enna button enable aavum.Ath click cheyumbol Dashboard page view aavanam.
  return (
    <>
      <Header insideDashboard/>
     <Row className='container-fluid' style={{marginTop:'300px'}}>
      <Col sm={12} md={8}>
        <h2>Welcome <span style={{color:'orange'}}>User</span></h2>
        {/* my project */}
        <MyProjects/>
      </Col>
      <Col sm={12} md={4}>
        {/* my profile */}
        <Profile/>
      </Col> 
     
     </Row>
    </>
    
  )
}

export default Dashboard