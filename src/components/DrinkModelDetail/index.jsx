
import { Col, Modal, Row, Image } from 'react-bootstrap'
import useDrinks from '../../hooks/useDrinks'




export const DrinkModalDetail = () => {
    
    const {showModal, handleShowModalClick, recipe} = useDrinks()
    const {strDrink, strDrinkThumb, strInstructions}  = recipe

    const showIngredients = ()=>{
      let ingredients = []
        for (let i = 1; i <= 15; i++) {
          if(recipe[`strIngredient${i}`]){
            ingredients.push(
              <li>
                { recipe[`strIngredient${i}`]} | {recipe[`strMeasure${i}`]}
              </li>
            )
          }
        }
      
      return ingredients
    }
    return (
    <Modal show={showModal} onHide={handleShowModalClick}size="xl">
        <Row>
          <Col>
            <Image
              src = {strDrinkThumb}
              alt = {`Imagen de ${strDrink}`}
              fluid
              className = "rounded-start"
            />
          </Col>
          <Col>
            <Modal.Header closeButton>
              <Modal.Title>
                {strDrink}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h3>Instruction</h3>
              <p>{strInstructions}</p>
              <h3>Ingredients</h3>
              <ul>
                {showIngredients()}
              </ul>


            </Modal.Body>
          </Col>
        </Row>
        
       
      </Modal>
  )
}
