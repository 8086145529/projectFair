import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import titleimage from '../Assets/web-development.jpg' // This is a method to import an image from a folder like Assets to a variable and use the variable on the src of an image in jsx i.e src={titleimage}
import ProjectCard from '../Components/ProjectCard'
import { Link } from 'react-router-dom'
import { homeProjectAPI } from '../Services/allAPI'


function Home() {
  const [loggedIn,setLoggedIn] = useState(false)// we are using a state called loggedIn to give condition in jsx
  const [homeProjects,setHomeProjects] = useState([])

  // api calling
  const getHomeProjects = async () =>{
    const result =await homeProjectAPI()
    if(result.status===200){
      setHomeProjects(result.data)
    }else{
      console.log(result);
      console.log(result.response.data);
    }

  }
  console.log(homeProjects);
  useEffect(()=>{ // giving the condition inside useEffect to see the link button of Manage your projects
    if(sessionStorage.getItem('token')){
      setLoggedIn(true)
    }else{
      setLoggedIn(false)
    }

    // api call
    getHomeProjects()
  },[])
  return (
    <>
    {/* landing section */}
    <div className='container-fluid rounded' style={{width:'100%',height:'100vh',backgroundColor:'#90ee90'}}>
      <Row className='align-items-center p-5' >
        {/*  md={6} if we only give this it means for medium and above medium size the col take only 1/2 of the whole space i.e it includes that lg={6} */}
        <Col sm={12} md={6}> 
          <h1 className='fw-bolder text-light'> <i class='fa-brands fa-stack-overflow fa-bounce'></i> Project Fair</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum rerum ea officia. Impedit ipsam quia modi maxime mollitia esse quam, praesentium cumque vitae itaque ad officiis reiciendis velit! Eligendi, velit!</p>
          {/* When we click Start to Explore, redirect to login page which is the Auth component */}
         {/* {loggedIn?
          <Link to={'/login'} className='btn btn-warning'> <i class='fa-solid fa-right-long fa-beat ms-2'></i> Manage your projects</Link>
          :<Link to={'/dashboard'} className='btn btn-warning'> <i class='fa-solid fa-right-long fa-beat ms-2'></i> Start to Explore</Link>
          } */}
           {loggedIn ? <Link to={'/dashboard'} className='btn btn-primary'>Manage your Projects</Link>
            :<Link to={'/login'} className='btn btn-primary'>Start to Explore</Link>}

        </Col>
        <Col sm={12} md={6}  >
          <img style={{marginTop:'100px'}} className='w-75 ms-5' src={titleimage} alt="" />
          
        </Col>

      </Row>

    </div>
    {/* all projects */}
    <div className='all projects mt-5'>
      <h1 className='text-center mb-5'>Explore Our Projects</h1>
      {/* scrollAmount={25} this scrollAmount is an attribute of marquee to increase the speed of it's movement */}
      <marquee scrollAmount={25}> 
        <Row>
          {homeProjects?.length>0?homeProjects.map((project)=>(
            <Col className='w-25 ms-5' sm={12} md={6} lg={4}>
            <ProjectCard project={project}/>
          </Col>
          )):null
            }
        </Row>
      </marquee>
      {/* Ee pageilek redirect aavenamenkil user login cheythirikanam.login cheyathavark ee page access cheyan pattila */}
      <div className='text-center mt-5'><Link to={'/projects'}>View More Projects</Link> 
      </div>
    </div>

    </>
  )
}

export default Home