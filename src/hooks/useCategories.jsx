import {useContext} from 'react'
import { CategoriesContext } from '../context/categoriesProvider'



const useCategories = () => {
  return useContext(CategoriesContext)
}

export default useCategories
