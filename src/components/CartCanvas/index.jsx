import { Button, ListGroup, Offcanvas } from "react-bootstrap";
import PropTypes from "prop-types";
import useCart from "../../hooks/useCart";
import { CartItem } from "../CartItem";
import { types } from "../../types";

export const CartCanvas = ({ showCart, handleCloseCart }) => {
  const { cart, dispatch } = useCart();

  const clearCart = () => {
    dispatch({
      type: types.clearCart,
      payload: [],
    });
  };

  return (
    <>
      <Offcanvas show={showCart} onHide={handleCloseCart} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Mi carrito</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cart.length ? (
            <div className="d-flex flex-column justify-content-between h-100">
              <div> 
                <ListGroup>
                  {cart.map((item) => (
                    <CartItem key={item.idDrink} item={item} />
                  ))}
                </ListGroup>
              </div>
              <div className="d-flex justify-content-center gap-3 mt-4">
                <Button variant="secondary" onClick={clearCart}>
                  Vaciar carrito
                </Button>
                <Button variant="danger">Confirmar compra</Button>
              </div>
            </div>
          ) : (
            <p>No hay productos en el carrito!!</p>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

CartCanvas.propTypes = {
  showCart: PropTypes.bool,
  handleCloseCart: PropTypes.func,
};
