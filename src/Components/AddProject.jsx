import React, { useContext, useEffect, useState } from 'react'
import { Button, Modal, Row } from 'react-bootstrap';
import imgplaceholder from '../Assets/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addProjectAPI } from '../Services/allAPI';
import { addProjectResponseContext } from '../Contexts/ContextShare';
function AddProject() {
  const {addProjectResponse,setAddProjectResponse} =useContext(addProjectResponseContext)
  const [show, setShow] = useState(false);
  const [projectDetails, setProjectDetails] = useState({
    title: "", languages: "", overview: "", github: "", website: "", projectImage: ""
  })

  const [preview, setPreview] = useState("")
  const [token, setToken] = useState("")

  const handleClose = () => {
    setShow(false)
    setProjectDetails({
      title: "", languages: "", overview: "", github: "", website: "", projectImage: ""
    })
    setPreview("")
  }

  const handleShow = () => setShow(true);
  console.log(projectDetails);// consoling the state to see the state as an object with keys on console

  useEffect(() => {
    if (projectDetails.projectImage) {
      setPreview(URL.createObjectURL(projectDetails.projectImage))
    }
  }, [projectDetails.projectImage])

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setToken(sessionStorage.getItem("token"))
    }else{
      setToken("")
    }
  },[])

  const handleAdd = async (e) => {
    e.preventDefault()
    console.log(projectDetails);
    const { title, languages, overview, projectImage, github, website } = projectDetails
    if (!title || !languages|| !overview || !projectImage || !github || !website) {
      console.log("fill form");
      toast.info("please fill the form completely !!!")
    } else {
      console.log("form filled");
      const reqBody = new FormData()
      reqBody.append("title", title)
      reqBody.append("languages", languages)
      reqBody.append("overview", overview)
      reqBody.append("projectImage", projectImage)
      reqBody.append("github", github)
      reqBody.append("website", website)

      if (token) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        }
        // token kittiyal mathram api call cheyan paadullu.
        const result = await addProjectAPI(reqBody, reqHeader)
        if (result.status === 200) {
          console.log(result.data);//result.data is the success response
          handleClose()
          // alert("Project added")
          setAddProjectResponse(result.data)
        } else {
          console.log(result);
          toast.warning(result.response.data);//result.response.data is the fail response
        }
      }



    }
  }
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
                {/* Important input */}
                <input onChange={e => setProjectDetails({ ...projectDetails, projectImage: e.target.files[0] })} style={{ display: 'none' }} type="file" />
                <img className='img-fluid' height={'200px'} src={preview ? preview : imgplaceholder} alt="" />
              </label>
            </div>
            <div className=' col-lg-6'>
              <div className='mb-3'>
                <input type="text" className='form-control' placeholder='Project Title' value={projectDetails.title} onChange={(e) => setProjectDetails({ ...projectDetails, title: e.target.value })} />
              </div>
              <div className='mb-3'>
                <input type="text" className='form-control' placeholder='Language Used' value={projectDetails.languages} onChange={(e) => setProjectDetails({ ...projectDetails, languages: e.target.value })} />
              </div>
              <div className='mb-3'>
                <input type="text" className='form-control' placeholder='Github Link' value={projectDetails.github} onChange={(e) => setProjectDetails({ ...projectDetails, github: e.target.value })} />
              </div>
              <div className='mb-3'>
                <input type="text" className='form-control' placeholder='Website Link' value={projectDetails.website} onChange={(e) => setProjectDetails({ ...projectDetails, website: e.target.value })} />
              </div>
              <div className='mb-3'>
                <input type="text" className='form-control' placeholder='Project Overview' value={projectDetails.overview} onChange={(e) => setProjectDetails({ ...projectDetails, overview: e.target.value })} />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAdd} variant="info">Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-right' theme='colored'/>
    </div>
  )
}

export default AddProject