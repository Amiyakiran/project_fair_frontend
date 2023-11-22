import React from 'react'
import Header from '../components/Header'

function Project() {
  return (
    <>
    <Header/>

    <div className='text-center' style={{marginTop:'150px'}}>
        <h1>All Project</h1>

        <div className="d-flex justify-content-center align-items-center">
            <div className="d-flex w-25 mt-5">
            <input className='form-control' type="text" placeholder='Search the project using technologies' />

            </div>
        </div>
    </div>
    
    </>
   
  )
}

export default Project