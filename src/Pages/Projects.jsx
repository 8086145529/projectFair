import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import ProjectCard from '../Components/ProjectCard'
import { Col, Row } from 'react-bootstrap'
import { allProjectsAPI } from '../Services/allAPI'

function Projects() {
  const [allProjects,setAllProjects]= useState([])
  const [searchKey,setSearchKey] = useState("")
  const getallProjects = async ()=>{
    if(sessionStorage.getItem("token")){
      const token = sessionStorage.getItem("token")
      const reqHeader={
        "Content-Type":"application/json","Authorization":`Bearer ${token}`
      }
      const result = await allProjectsAPI(searchKey,reqHeader)
      if(result.status===200){
        setAllProjects(result.data)
      }else{
        console.log(result);
      }
    }
  }

  useEffect(()=>{
getallProjects()
  },[searchKey])
  
  return (
   <>
      <Header/>
      <div className='projects' style={{marginTop:'100px'}}>
        <h1 className='text-center mt-5 '>All Projects</h1>
        <div className='d-flex justify-content-center align-items-center w-100'>
          {/*The below div is given d-flex to align it's child elements in a line  */}
          <div className='d-flex border w-50 rounded mb-5'>
            <input onChange={(e)=>{setSearchKey(e.target.value)}} className='form-control' style={{width:'40rem',height:'2rem'}} type="text" placeholder='Search Projects by technologies Used' />
            <i style={{marginLeft:'-50px'}} class="fa-solid fa-magnifying-glass fa-rotate-90"></i>
          </div>
        </div>
        <Row className='img-fluid'>
           {allProjects?.length>0?allProjects.map(project=>(
            <Col sm={12} md={6} lg={4}>
            <ProjectCard project={project}/>
          </Col>
            
           )):<p color='blue'>Please Login !!!</p> }
          </Row>
       </div>
   </>
  )
}

export default Projects

