import axios from 'axios'
//importo la variable de entorno y se la asigno a una variable
const apiURL = import.meta.env.VITE_API_URL;    

export const getCategoriesService = async()=>{
    try{
        const url =  `${apiURL}list.php?c=list`
        const {data} = await axios.get(url)
        console.log(data.drinks)
        return data.drinks 
    }catch(error){
        console.error
     throw new Error("Hubo un error al obtener las categorias!")
    }
}