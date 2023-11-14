import React from 'react'
import Header from '../Components/Header'
import ProjectCard from '../Components/ProjectCard'
import { Col, Row } from 'react-bootstrap'

function Projects() {
  return (
   <>
      <Header/>
      <div className='projects' style={{marginTop:'100px'}}>
        <h1 className='text-center mt-5 '>All Projects</h1>
        <div className='d-flex justify-content-center align-items-center w-100'>
          {/*The below div is given d-flex to align it's child elements in a line  */}
          <div className='d-flex border w-50 rounded'>
            <input className='form-control' style={{width:'40rem',height:'2rem'}} type="text" placeholder='Search Projects by technologies Used' />
            <i style={{marginLeft:'-50px'}} class="fa-solid fa-magnifying-glass fa-rotate-90"></i>
          </div>
        </div>
        <Row className='img-fluid'>
            <Col sm={12} md={6} lg={4}>
              <ProjectCard/>
            </Col>
          </Row>
       </div>
   </>
  )
}

export default Projects