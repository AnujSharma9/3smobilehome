import axios from 'axios';
import {createUrl,createError} from "./Utils"

export async function signUpUser(name,phoneNumber,email,password) {
    try{
        const url = createUrl('user/signup')
        const body = {
            name,
            phoneNumber,
            email,
            password
        }
        const response = await axios.post (url,body) 
        
        return response.data

    }catch(ex){
        return createError (ex)
    }
}

export async function signInUser(email,password) {
    try{
        const url = createUrl('user/signip')
        const body = {
          
            email,
            password
        }
        const response = await axios.post (url,body) 
        
        return response.data

    }catch(ex){
        return createError (ex)
    }
}