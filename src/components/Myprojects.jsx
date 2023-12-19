import React, { useEffect, useState } from 'react'
import AddProject from './AddProject'
import { userProjectAPI } from '../Services/allAPI'

function Myprojects() {
  const [userProjects,setUserProjects]=useState([])

  const getUserProject = async()=>{
    if(sessionStorage.getItem("token")){
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      }
      const result = await userProjectAPI(reqHeader)
      console.log(result);
      if(result.status ===200){
          setUserProjects(result.data)
      }else{
        console.log(result);
      }
    }
     
  }
  console.log(userProjects);
  useEffect(()=>{
    getUserProject()
  },[])
  return (
    <div className='card shadow p-3 ms-3 me-3'>
        
        <div className='d-flex'>
           <h3 className='text-success ms-3'> My projects</h3>
           <div className="ms-auto">
            <AddProject/>
           </div>

        </div>
        <div className="mt-4">
            {/* collection of user project */}
            {userProjects?.length>0?
            userProjects.map((item)=>( <div className="border d-flex align-items-center rounded p-2">
            <h5>{item.title}</h5>
            <div className="icon ms-auto">
                <button className="btn"><i class="fa-solid fa-pen-to-square text-info"></i></button>
                <a href={item.github} target='_blank' className="btn"><i class="fa-brands fa-github text-success"></i></a>

                <button className="btn"><i class="fa-solid fa-trash text-danger"></i></button>

            </div>
        </div>))
           :
            <p className='text-danger fw-bolder fs-3'>No project uploaded yet !!</p>}
        </div>
        
    </div>
  )
}

export default Myprojects