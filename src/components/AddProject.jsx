import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



function AddProject() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Button variant="success" onClick={handleShow}>
                Add project
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size='lg'
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Project Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-lg-6">
                            <label>
                                <input type="file" style={{display:'none'}}/>
                                <img className='img-fluid' src="https://m.media-amazon.com/images/I/71sKzRQtXtL.png" alt="no image" /></label>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center align-items-center flex-column">
                            <div className='mb-3 mt-3 w-100'>
                                <input type="text" className="form-control" placeholder='project Title' />

                            </div>
                            <div className='mb-3 w-100'>
                                <input type="text" className="form-control" placeholder='Language used' />

                            </div>             
                            
                            <div className='mb-3 w-100'>
                                <input type="text" className="form-control" placeholder='Github Link' />
                            </div>
                            <div className='mb-3 w-100'>
                                <input type="text" className="form-control" placeholder='Website Link' />

                            </div>
                            <div className='mb-3 w-100'>
                                <textarea  type="text" className="form-control" placeholder='Project OverView' />

                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="success">Add</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddProject