import React, { useState } from 'react'
import { Button, Modal, Row } from 'react-bootstrap';
import imgplaceholder from '../Assets/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg'
function AddProject() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
     <Button variant="success" onClick={handleShow}>
        Add Project
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
          <div className='col-lg-6'>
            {/* Wrap the img tag inside label tag and give an inputbox within the label tag*/}
             <label>
                <input style={{display:'none'}} type="file" />
                 <img className='img-fluid'height={'200px'} src={imgplaceholder}alt="" />
             </label>
           </div>
           <div className=' col-lg-6'>
              <div className='mb-3'>
                   <input type="text" className='form-control' placeholder='Project Title' />
              </div>
              <div className='mb-3'>
                   <input type="text" className='form-control' placeholder='Language Used' />
              </div>
              <div className='mb-3'>
                   <input type="text" className='form-control' placeholder='Github Link' />
              </div>
              <div className='mb-3'>
                   <input type="text" className='form-control' placeholder='Website Link' />
              </div>
              <div className='mb-3'>
                   <input type="text" className='form-control' placeholder='Project Overview' />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="info">Add</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddProject