import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';


function Profile() {

    const [open, setOpen] = useState(false);

    const [userProfile,setUserProfile] = useState({
      username:"",email:"",password:"",profile:"",github:"",linkedin:""
    })
    const [existingImage,setExistingImage]=useState("")
    const [preview,setPreview]=useState("")

    useEffect(()=>{
     if(sessionStorage.getItem("existingUser")){
      const user = JSON.parse(sessionStorage.getItem("existingUser"))
      setUserProfile({...userProfile,username:user.username,email:user.email,password:user.password,profile:"",github:user.github})
     }
    },[])

  return (
    <div className='card shadow p-5'>
          <div className="d-flex justify-content-between ">
            <h2>Profile</h2>
            <button onClick={() => setOpen(!open)} className="btn btn-outline-info"><i class="fa-solid fa-arrow-up-from-bracket fa-rotate-180"></i></button>
          </div>
          <Collapse in={open}>
              <div className="row justify-content-center mt-3">
                {/* upload picture */}
                <label htmlFor="profile" className='text-center'>
                    <input id='profile' style={{display:'none'}} type="file" />
                    <img width={'200px'} height={'200px'} src="https://www.freeiconspng.com/uploads/female-user-icon-clip-art--30.png" alt="no image" className='rounded-circle' />
                </label>
                <div className="mt-5">
                        <input type="text" className='form-control' placeholder='GitHub' />
                </div>
                <div className="mt-3">
                        <input type="text" className='form-control' placeholder='LinkedIn' />
                </div>
                <div className="mt-4 ">
                    <button className='btn btn-success rounded w-100'>Update</button>
                </div>
              </div>
          </Collapse>
    </div>
  )
}

export default Profile