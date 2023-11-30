import React, { useEffect, useState } from 'react'
import loginimg from '../Assets/loginimg.jpg'
import { Collapse } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { editUserAPI } from '../Services/allAPI';
import { BASE_URL } from '../Services/baseurl';

function Profile() {
  const [open, setOpen] = useState(false);
  const [userProfile,setUserProfile] = useState({
    username:"",email:"",password:"",profile:"",github:"",linkedin:""
  })
  // This state is created to store an image which is already stored in the backend // state to store already uploaded profile pic of user in db to display that pic even after user click on the update button.i.e oru pravishyam update cheytha image.
  const [existingImage,setExistingImage] = useState("")
    // to set url of the uploaded profile pic 
  const [preview,setPreview] = useState("")

  useEffect(()=>{
      const user = JSON.parse(sessionStorage.getItem("existingUser"))
      setUserProfile({...userProfile,username:user.username,email:user.email,password:user.password,profile:"",github:user.github,linkedin:user.linkedin})
      setExistingImage(user.profile)
},[open])

useEffect(()=>{
  if(userProfile.profile){
    setPreview(URL.createObjectURL(userProfile.profile))
  }else{
    setPreview("")
  }
  console.log(preview);

},[userProfile.profile])

 const handleProfileUpdate = async () =>{
  const {username,email,password,profile,github,linkedin} = userProfile
  if(!github || !linkedin){
 toast.info("Please fill the form completely!!!")
  }else{
    const reqBody = new FormData()
    reqBody.append("username",username)
    reqBody.append("email",email)
    reqBody.append("password",password)
    reqBody.append("github",github)
    reqBody.append("linkedin",linkedin)
    preview?reqBody.append("profileImage",profile):reqBody.append("profileImage",existingImage)
    const token = sessionStorage.getItem("token")
    if(preview){
      const reqHeader = {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${token}`
      }
      const res = await editUserAPI(reqBody,reqHeader)
      if(res.status===200){
        setOpen(!open)
        sessionStorage.setItem("existingUser",JSON.stringify(res.data))  
      }else{
        setOpen(!open)
        console.log(res);
        console.log(res.response.data);
      }
    }else{
      const reqHeader ={
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      }
      const res = await editUserAPI(reqBody,reqHeader)
      if(res.status===200){
        setOpen(!open)
        sessionStorage.setItem("existingUser",JSON.stringify(res.data))
      }else{
        setOpen(!open)
        console.log(res);
        console.log(res.response.data);
      }
      }

  }
 }
  return (
    <>
    
      <div style={{width:'400px'}} className='card container d-flex flex-column mb-5'>
         <div className='d-flex justify-content-between'> 
          <h2>My Profile</h2>
          <button  onClick={() => setOpen(!open)} className='btn btn-outline-info'><i class="fa-solid fa-angle-down"></i></button>
          </div>
          {/* To make an image uploaded from the file use label tag and inside it use input and img tags */}
         
      
          <Collapse in={open}>
           <div className='row shadow p-5 justify-content-center mt-4'>
              {/* upload picture */}
              <label className='text-center '>
                  <input onChange={e=>setUserProfile({...userProfile,profile:e.target.files[0]})} style={{display:'none'}} type="file" />
                  {existingImage!==""?
                    <img src={preview?preview:`${BASE_URL}/uploads/${existingImage}`} width={'200px'} height={'200px'} className='rounded-circle'  alt="uploadimage" />
                   : <img  src={preview?preview:`${loginimg}`}  width={'200px'} height={'200px'} className='rounded-circle'alt="uploadimage" />
                  }
              </label>
       
            <div className='d-flex flex-column'>
                <input value={userProfile.github} onChange={e=>setUserProfile({...userProfile,github:e.target.value})} className='form-control mt-4 ' type="text" placeholder='Github'/>
                <input value={userProfile.linkedin} onChange={e=>setUserProfile({...userProfile,linkedin:e.target.value})} className='form-control mt-4 mb-4' type="text" placeholder='LinkedIn'/>
            </div>
            <div className='mt-3 text-center d-grid'>
              <button onClick={handleProfileUpdate} className='btn btn-warning '>Update</button>
            </div>
           </div>
          </Collapse>
          <ToastContainer position='top-right' theme='colored'/>
      </div>
      

        
    </>
  )
}

export default Profile
