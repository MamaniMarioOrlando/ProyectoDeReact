import { createContext, useEffect, useState } from 'react'
import {PropTypes} from 'prop-types'
import { getCategoriesService } from '../services/categories.service';

const CategoriesContext = createContext(null)   

const CategoriesProvider = ({children}) => {
  const [categories,setCategories]= useState([]);
  const getCategories = async()=>{
    try{
      //traigo el array de categoria 
      //y lo almaceno en la constante categoriesData
        const categoriesData = await getCategoriesService()
        console.log(categoriesData)
        setCategories(categoriesData)
    }catch(error){
        console.error;
    }
  }

  useEffect( () => {
    getCategories()
  },[] );
  
  const contextValue={
    categories
  }
  return(
    <CategoriesContext.Provider value={contextValue}>
        {children}
    </CategoriesContext.Provider>
  )
}

CategoriesProvider.propTypes = {
    children : PropTypes.node.isRequired
}

export{
    CategoriesProvider,
    CategoriesContext
}