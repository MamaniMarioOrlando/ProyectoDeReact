
import { useState } from 'react';
import styles from './index.module.css';
import { CartCanvas } from '../CartCanvas';
import { Button } from 'react-bootstrap';

export const Header = ()=>{

    const [showCart, setShowCart] = useState(false)


    const handleShowCart = ()=> setShowCart(true)
    const handleCloseCart = () => setShowCart(false)

    return (
        <header className = {`d-flex justify-content-around py-3 ${styles.header}`}>
            <h1>Search drink</h1>
            <Button variant="outline-ligth" size="lg" onClick={handleShowCart}>
                <i className="fas fa-shopping-cart fa-lg"></i>
            </Button>
            <CartCanvas showCart={showCart} handleCloseCart={handleCloseCart}/>
        </header>

    )
}