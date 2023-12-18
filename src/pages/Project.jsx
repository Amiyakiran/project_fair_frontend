import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'
import { allProjectAPI } from '../Services/allAPI'

function Project() {
 const[allprojects , setAllProjects] = useState([])
  const getAllProject = async()=>{
    if(sessionStorage.getItem("token")){
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      }
      const result = await allProjectAPI(reqHeader)
      console.log(result);
      if(result.status ===200){
        setAllProjects(result.data)
      }
      else{
        console.log(result);
      }
    }
  }
  useEffect(()=>{
    getAllProject()
  },[])
  return (
    <>
    <Header/>

    <div className='text-center' style={{marginTop:'150px'}}>
        <h1>All Project</h1>

        <div className="d-flex justify-content-center align-items-center">
            <div className="d-flex w-25 mt-5">
            <input className='form-control' type="text" placeholder='Search the project using technologies' />
            <i style={{marginLeft:'-40px', color:'grey'}} class="fa-solid fa-magnifying-glass  fa-rotate-90"></i>
            </div>
            
        </div>
        <Row className='mt-5 container-fluid'>
           {
           allprojects?.length>0? 
           allprojects.map((item)=>( <Col sm={12} md={6} lg={4}>
            <ProjectCard project={item}/>
         </Col>))
          :null}
        </Row>
    </div>
    
    </>
   
  )
}

export default Project