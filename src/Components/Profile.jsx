import React, { useState } from 'react'
import loginimg from '../Assets/loginimg.jpg'
import { Collapse } from 'react-bootstrap'

function Profile() {
  const [open, setOpen] = useState(false);
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
              <label className='text-center '>
                  <input style={{display:'none'}} type="file" />
                  <img width={'200px'} height={'200px'} className='rounded-circle' src={loginimg} alt="" />
              </label>
       
            <div className='d-flex flex-column'>
                <input  className='form-control mt-4 ' type="text" placeholder='Github'/>
                <input className='form-control mt-4 mb-4' type="text" placeholder='LinkedIn'/>
            </div>
            <div className='mt-3 text-center d-grid'>
              <button className='btn btn-warning '>Update</button>
            </div>
           </div>
          </Collapse>
      </div>
      

        
    </>
  )
}

export default Profile

// import React, { useState } from 'react'
// import { Collapse } from 'react-bootstrap';


// function Profile() {
//   const [open, setOpen] = useState(false);
//   return (
//     <>
//       <div className=' mt-5'>
//        <div className='d-flex border rounded p-3 justify-content-between ' >
//             <h3>Profile</h3>
//            <button    onClick={() => setOpen(!open)} className='btn btn-outline-info '><i class="fa-solid fa-chevron-down"></i></button>
    
//        </div>
       
//      <Collapse in={open}>
//          <div className='row shadow p-5 justify-content-center mt-4'>
//           {/* upload image */}
//           <label className='text-center'>
//               <input style={{display:'none'}} type="file" />
//               <img width={'200px'} height={'200px'} src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
//           </label>
//            <div className='mt-3'>
//             <input type="text" className='form-control' placeholder='Github' />
//            </div>
  
//            <div className='mt-3'>
//             <input type="text" className='form-control' placeholder='LinkedIn' />
//            </div>
//            <div className='mt-3 text-center d-grid'>
//               <button className='btn btn-warning'>Update</button>
//            </div>
  
//          </div>
//      </Collapse>
//         </div>  
//     </>
//   )
// }

// export default Profile