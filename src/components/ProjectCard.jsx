import React from 'react'
import Card from 'react-bootstrap/Card'
import projectimage from '../Assests/videoPlayer.png'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Col, Row } from 'react-bootstrap';


function ProjectCard() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Card className='shadow mb-5 btn ' onClick={handleShow}>
      <Card.Img variant="top" src={projectimage}/>
      <Card.Body>
        <Card.Title>Video Player</Card.Title> 
      </Card.Body>
    </Card>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col  md={6}>
               <img src={projectimage} alt="no image"  style={{height:'200px'}} className='img-fluid'/>
            </Col>
            <Col md={6}>
                <h2>Project Title</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam cumque, quae harum asperiores consequatur velit officia nemo quisquam, voluptatum eum quibusdam pariatur similique consequuntur autem aperiam minima. Cum, dolorem veniam.</p>
                <p>Language Used : <span className='fw-bolder'>HTML, CSS, React</span></p>
            </Col>
          </Row>
          <div className='mt-3'>
             <a href="https://github.com/Amiyakiran/video_player_react" target='-blank' className='btn me-5'><i class="fa-brands fa-github fa-2x"></i></a>
             <a href="https://media-player-frontend-b4.vercel.app/" target='-blank'  className='btn me-5'><i class="fa-solid fa-link fa-2x"></i></a>
          </div>
        </Modal.Body>
       
      </Modal>

    </>
  )
}

export default ProjectCard