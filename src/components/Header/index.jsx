
import { useState } from 'react';
import styles from './index.module.css';
import { CartCanvas } from '../CartCanvas';
import { Badge, Button } from 'react-bootstrap';
import useCart from '../../hooks/useCart';

export const Header = ()=>{

    const [showCart, setShowCart] = useState(false)

    const {cart} = useCart();
    const handleShowCart = ()=> setShowCart(true)
    const handleCloseCart = () => setShowCart(false)

    return (
        <header className = {`d-flex justify-content-around py-3 ${styles.header}`}>
            <h1>Search drink</h1>
            <div className= "position-relative">
            <Button variant="outline-ligth" size="lg" onClick={handleShowCart}>
                <i className="fas fa-shopping-cart fa-lg"></i>
            </Button>
            <Badge className="position-absolute top-50 start-50" pill bg="primary">{cart.length}</Badge>
            </div>
            <CartCanvas showCart={showCart} handleCloseCart={handleCloseCart}/>
        </header>

    )
}