import { BASE_URL } from "./baseurl"
import { commonAPI } from "./commonAPI"

//register
export const registerAPI = async (user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/register`,user,"")
}

//login
export const loginAPI = async(user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/login`,user,"")
}

//addproject

export const addProjectAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${BASE_URL}/project/add`,reqBody,reqHeader)
}

//homeproject
export const homeProjectAPI = async()=>{
    return await commonAPI("GET",`${BASE_URL}/projects/home-project`)
}

//allproject
export const allProjectAPI = async(searchKey,reqHeader)=>{
    //path parameter,query parameter,body parameter
    //for query parameter put a question mark then a variable/value of variable
    return await commonAPI("GET",`${BASE_URL}/projects/all?search=${searchKey}`,"",reqHeader)
}

//userProject
export const userProjectAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/user/all-project`,"",reqHeader)
}


//UPDATE USER PROJECT
export const editProjectAPI = async(projectId,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${BASE_URL}/project/edit-project/${projectId}`,reqBody,reqHeader)
}