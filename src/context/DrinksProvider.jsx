import { createContext, useEffect, useState } from 'react'
import {PropTypes} from 'prop-types'
import { filterDrinksService, getRecipeService } from '../services/drinks.service';

const DrinksContext = createContext(null);
const DrinksProvider = ({children}) => {
    //Declaracion de los estados
    const [drinks, setDrink] = useState([])
    const [loading, setLoading] = useState(false)
    const [recipe, setRecipe] = useState([])
    const [idDrink, setIdDrink] = useState(null)
    const [showModal, setShowModal] = useState(false)

    const getDrinks = async(data) =>{
        try {
            const {ingredient, category} = data
            setLoading(true)
            const drinkData = await filterDrinksService(ingredient, category)
            setDrink(drinkData)
        } catch (error) {
            console.error
        }finally{
            setLoading(false)
        } 
    }


    //El useEffect solo se ejecuta cuando 
    //el usuario halla seleccionado una bebida
    useEffect(() => {
        const getRecipe = async() =>{
            if(!idDrink) return
            try {
                setLoading(true)
                const recipeData = await getRecipeService(idDrink)
                setRecipe(recipeData)
                setShowModal(show => !show)
                setIdDrink(false)
            } catch (error) {
                console.error
            }finally{
                setLoading(false)
            }
        }
        getRecipe()
    }, [idDrink])
    
    const handleDrinkIdClick = (id) =>{
        setIdDrink(id)
    }
    const handleShowModalClick = ()=>{
        setShowModal(show => !show)
    }
    
    const contextValues = {
        drinks,
        getDrinks,
        loading,
        recipe,
        handleDrinkIdClick,
        showModal,
        handleShowModalClick,
        idDrink
        
    }
return (
    <DrinksContext.Provider value={contextValues}>
        {children}
    </DrinksContext.Provider>
)

}

DrinksProvider.protoType ={
    children : PropTypes.node.isRequired
}

export {
    DrinksContext,  
    DrinksProvider
}