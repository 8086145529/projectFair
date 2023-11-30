import React, { useEffect, useState } from 'react'
import AddProject from './AddProject'
import { deleteProjectAPI, userProjectAPI } from '../Services/allAPI'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useContext } from 'react';
import { addProjectResponseContext, editProjectResponseContext } from '../Contexts/ContextShare';
import EditProject from './EditProject';

// import projects from '../../../pfServer/Models/projectSchema';
function MyProjects() {
    const {addProjectResponse,setAddProjectResponse} =useContext(addProjectResponseContext)
    const {editProjectResponse,setEditProjectResponse} = useContext(editProjectResponseContext)
    const [userProjects,setUserProjects] = useState([])
    
    const handleDelete = async (id)=>{
        const token = sessionStorage.getItem("token")
        const reqHeader = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        const result = await deleteProjectAPI(id,reqHeader)
        if(result.status===200){
            // page reload
            getUserProjects()
        }else{
            toast.error(result.response.data)
        }

    }
    const getUserProjects = async ()=>{
        if(sessionStorage.getItem("token")){
            const token = sessionStorage.getItem("token")
            const reqHeader = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
              }
            const result = await userProjectAPI(reqHeader)
            if(result.status===200){
                setUserProjects(result.data)
                console.log(result.data);
            }else{
                console.log(result);
                toast.warning(result.response.data)
            }
        }
    }

    useEffect(()=>{
getUserProjects()
    },[addProjectResponse,editProjectResponse])
  return (
    <div className='card shadow p-3 mt-3'>
        <div className='d-flex'>
            <h3>Add Projects</h3>
            {/* We are giving the Selector of AddProject component here */}
            <div className='ms-auto'>
                <AddProject/>
            </div>
        </div>
        <div className="mt-4">
            {/* collection of projects */}
            {userProjects?.length>0?userProjects.map(project=>(
                <div className='border d-flex align-items-center rounded p-2'>
                <h5>{project.title}</h5>
                <div className='icon ms-auto'>
                  <EditProject project={project}/>
                    <a href={`${project.github}`} target='_blank' className='btn'><i class="fa-brands fa-github  fa-2x"></i></a>
                    <button onClick={()=>{handleDelete(project._id)}} className='btn'><i class="fa-solid fa-trash  fa-2x"></i></button>
                </div>

            </div>
            )):<p className='text-danger fa-bolder fs-5'>No Projects Uploaded yet!!</p>
            }
        </div>
    <ToastContainer position='top-right' theme='colored'/>

    </div>
  )
}

export default MyProjects