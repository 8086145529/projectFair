import React, { useState } from 'react'
import { Card, Col, Modal, Row } from 'react-bootstrap'
import img from '../Assets/img.avif'
import projectpic from '../Assets/ProjectManagement.jpg'

function ProjectCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    {/* Give this onClick={handleShow} on Card */}
     <Card onClick={handleShow} className='shadow mb-5 btn'>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>Project Title</Card.Title>       
      </Card.Body>
    </Card>
    {/* when we click on the card in home page , a modal should pop up */}
    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6}>
            <img className='img-fluid' style={{height:'200px'}} src={projectpic} alt="" />
            </Col>
            <Col md={6}>
              <h2>Project Title</h2>
              <p>Project Overview: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias deleniti placeat dolor excepturi harum eius esse quis porro nostrum consequatur! Corporis suscipit ullam aspernatur esse aut commodi veritatis dignissimos laborum.</p>
              <p>Language Used: <span className='fw-bolder'>HTML,CSS,React</span> </p>
            </Col>
          </Row>
          <div className='mt-3'>
            <a className='me-5 btn' href="https://github.com/8086145529/E-cart" target='_blank'><i class="fa-brands fa-github fa-2x"></i></a>
            <a className='me-5 btn' href="https://e-cart-seven-ashen.vercel.app/" target='_blank'><i class="fa-solid fa-link fa-2x"></i></a>
              </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ProjectCard