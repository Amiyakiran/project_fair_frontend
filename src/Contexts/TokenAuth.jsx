import React, { createContext, useState } from 'react'

export const tokenAuthContext= createContext()

function TokenAuth({children}) {
    const [isAuthorized, setIsAuthorized]= useState(true)
  return (
    <>
   <tokenAuthContext.Provider value={{isAuthorized, setIsAuthorized}}> 
     {children}
    </tokenAuthContext.Provider>
    </>
  )
}

export default TokenAuth