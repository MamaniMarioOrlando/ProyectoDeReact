import PropTypes from 'prop-types'
import { Image, ListGroupItem } from 'react-bootstrap';
import useCart from '../../hooks/useCart';
import { types } from '../../types';



export const CartItem = ({item}) => {

    const {strDrink, strDrinkThumb, price,quantity} = item

    const {dispatch}=useCart()

    const handleAddItem = () => {
        dispatch({
            type : types.addItemToCart,
            payload : item  
        })
    }

    const handleRemoveItem = () => {
        dispatch({
            type : types.removeItemFromCart,
            payload : item  
        })
    }
    const handleRemoveAll = () =>{
        dispatch({
            type : types.removeAllFromCart,
            payload : item
        })
    }

  return (
    <ListGroupItem className='d-flex gap-3'>
        <Image src={strDrinkThumb} width={"100px"}/>
        <div style={{width:"100%"}}>
            <h6>{strDrink}</h6>
            <hr />
            <div className='d-flex justify-content-between '>
                <h4>${price * quantity}</h4>
                <div className='d-flex gap-2'>
                    <button
                     className='btn btn-sm btn-danger'
                     onClick={handleRemoveItem}
                     >
                        <i className="fa-solid fa-minus"></i>
                    </button>
                    <input 
                    type="text" 
                    style={{width:'50px'}} 
                    className='form-control'
                    value = {quantity}
                    />
                    <button 
                    className='btn btn-sm btn-success'
                    onClick={handleAddItem}>
                        <i className="fa-solid fa-plus"></i>
                    </button >
                    <button 
                    className='btn btn-sm btn-danger' 
                    onClick={handleRemoveAll}
                    >
                    <i className="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </div>
        </div>
    </ListGroupItem>
  )
}

CartItem.propTypes={
    item : PropTypes.shape({
        strDrink : PropTypes.string,
        strDrinkThumb : PropTypes.string,
        price : PropTypes.string,
        quantity : PropTypes.number
    })
}