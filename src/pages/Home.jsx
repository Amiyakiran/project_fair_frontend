import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import titleImage from '../Assests/designer.svg'
import ProjectCard from '../components/ProjectCard'
import { Link } from 'react-router-dom'


function Home() {
  const [islogin , setIsLogin]=useState(false)
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
        setIsLogin(true)
    }
  },[])
  return (
   <>
        <div style={{width:'100%', height:'100vh'}} className='bg-success' >
            <div className='container-fluid rounded'>
                <Row className='align-items-center p-5'>
                    <Col sm={12} md={6}>
                    <h1 style={{fontSize:'50px'}} className='fw-bolder text-light mb-5'> <i class="fa-brands fa-stack-overflow"></i>Project Fair</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit incidunt amet doloribus minus soluta itaque </p>
                    {islogin?
                      <Link to={'/dashboard'} className='btn btn-warning rounded'>Manage your project</Link>:
                    <Link to={'/login'} className='btn btn-warning rounded'>Get started</Link>}

                    </Col>
                    <Col sm={12} md={6}>
                    <img src={titleImage} alt="" style={{marginTop:'100px'}} className='w-75' />
                    </Col>
                </Row>
            </div>
    
        </div>

        <div className='all-project mt-5'>
            <h1 className='text-center'>Explore Our Project</h1>
           <marquee scrollAmount={25} className=" mt-5">
                <div className='d-flex'>
                    <div className='ms-5' style={{width:'500px'}}>
                      <ProjectCard/>
                    </div>
                    <div className='ms-5'  style={{width:'500px'}}>
                      <ProjectCard/>
                    </div>
                    <div className='ms-5'  style={{width:'500px'}}>
                      <ProjectCard/>
                    </div>
                </div>
           </marquee>
           <div className='text-center mt-5'>
            <Link to={'/project'}>View more project</Link>
           </div>
        </div>


   </>
  )
}

export default Home