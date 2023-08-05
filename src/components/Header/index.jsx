import { useState } from "react";
import styles from "./index.module.css";
import { CartCanvas } from "../CartCanvas";
import { Badge, Button } from "react-bootstrap";
import useCart from "../../hooks/useCart";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export const Header = () => {
  const [showCart, setShowCart] = useState(false);

  const {user, logout} = useAuth()

  const { cart } = useCart();
  const handleShowCart = () => setShowCart(true);
  const handleCloseCart = () => setShowCart(false);

  const handleLogout = () => {

    logout()
  }

  return (
    <header className={`d-flex justify-content-between py-3 ${styles.header}`}>
      <h1>Search drink</h1>
      <div className="d-flex aling-item-center">
        {
            user
            ?
            (
              <div className="d-flex gap-2">
                <Link to={"/user/profile"} className="btn btn-outline-light" variant="outline-ligth" size="lg">
                  <i className="fa-solid fa-user fa-lg"></i>
                  <span>{user.name}</span>
                </Link>
                <Button onClick={handleLogout} variant="outline-ligth" size="lg">
                  <i className="fa-solid fa-arrow-right-to-bracket fa-lg"></i>
                </Button>
              </div>
            )
            :
            <Link to={"/login"} className="btn btn-outline-light" variant="outline-ligth" size="lg">
          <i className="fa-solid fa-arrow-right-to-bracket fa-lg"></i>
        </Link>
        }
        
        <div className="position-relative">
          <Button variant="outline-ligth" size="lg" onClick={handleShowCart}>
            <i className="fas fa-shopping-cart fa-lg"></i>
          </Button>
          <Badge
            className="position-absolute top-50 start-50"
            pill
            bg="primary"
          >
            {cart.length}
          </Badge>
        </div>
      </div>
      <CartCanvas showCart={showCart} handleCloseCart={handleCloseCart} />
    </header>
  );
};
