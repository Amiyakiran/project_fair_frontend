import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
export const addProjectResponseContext = createContext()

//if we want to share data between all the components use the predefined prop - children

function ContextShare({children}) {
    const[addProjectResponse,setAddProjectResponse]=useState({})
  return (
    <>
    {/* to provide the data into children */}
    {/* value to be shared have to be mentioned in value attribute */}
     <addProjectResponseContext.Provider value={{addProjectResponse,setAddProjectResponse}}> 
        {children}
        </addProjectResponseContext.Provider>
    </>
  )
  /* then rap the app.js in the contextShare in index.js */
}

export default ContextShare