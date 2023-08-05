import axios from 'axios'

const urlApi = import.meta.env.VITE_API_URL_AUTH;

export const registerAuthService = async(info) => {
    try {
        const url= `${urlApi}register`

        const {data} = await axios.post(url,{
            headers :{
                'content-type':'aplication/json'
            },
            body : JSON.stringify(info)
        })

        return data

    } catch (error) {
        throw new Error(error.message)
    }
}
export const loginAuthService = async(info) => {
    try {
        const url= `${urlApi}login`

        const {data} = await axios.post(url,{
            ...info
        },{
            headers :{
                "Content-Type":"application/json"
            }
            
        })

        return data

    } catch (error) {
        throw error.response.data
    }
}

export const profileUserService = async(token) => {
    try {
        const url= `${urlApi}profile`
        const data = await axios.get(url , {
            headers: {
                Authorization : token
            }})

        return data
    } catch (error) {
        throw error.response.data
    }
    
}