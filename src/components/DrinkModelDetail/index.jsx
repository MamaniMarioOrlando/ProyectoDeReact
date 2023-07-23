import { Col, Modal, Row, Image, Button } from "react-bootstrap";
import useDrinks from "../../hooks/useDrinks";
import useCart from "../../hooks/useCart";
import { types } from "../../types";
import { getDrinkById } from "../../helpers";
import Swal from "sweetalert2";

export const DrinkModalDetail = () => {
  const { showModal, handleShowModalClick, recipe, drinks } = useDrinks();
  const { idDrink, strDrink, strDrinkThumb, strInstructions } = recipe;

  const showIngredients = () => {
    let ingredients = [];
    for (let i = 1; i <= 15; i++) {
      if (recipe[`strIngredient${i}`]) {
        ingredients.push(
          <li key={`strIngredient${i}`}>
            {recipe[`strIngredient${i}`]} | {recipe[`strMeasure${i}`]}
          </li>
        );
      }
    }

    return ingredients;
  };

  const { dispatch } = useCart();

  const handleAddCard = () => {
    const drink = getDrinkById(drinks, idDrink);

    dispatch({
      type: types.addItemToCart,
      payload: drink,
    });
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your add drink in the cart',
      showConfirmButton: false,
      timer: 1500
    })
  };

  return (
    <Modal show={showModal} onHide={handleShowModalClick} size="xl">
      <Row>
        <Col>
          <Image
            src={strDrinkThumb}
            alt={`Imagen de ${strDrink}`}
            fluid
            className="rounded-start"
          />
        </Col>
        <Col>
          <Modal.Header closeButton>
            <Modal.Title>{strDrink}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="d-flex flex-colum ">
            <div>
              <h3>Instruction</h3>
              <p>{strInstructions}</p>
              <h3>Ingredients</h3>
              <ul>{showIngredients()}</ul>
            </div>
            <Button
              variant="danger"
              className="w-100 text-uppercase mt-2"
              onClick={handleAddCard}
            >
              comprar
            </Button>
          </Modal.Body>
        </Col>
      </Row>
    </Modal>
  );
};
