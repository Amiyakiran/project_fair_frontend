import React from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'

function Project() {
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
            <Col sm={12} md={6} lg={4}>
               <ProjectCard/>
            </Col>
        </Row>
    </div>
    
    </>
   
  )
}

export default Project