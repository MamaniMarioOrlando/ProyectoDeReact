import {types} from '../types'

export const cartReducer = (state = [], action) => {
  const item = state.find(item => item.idDrink === action.payload.idDrink)

  const addItemToCart= (item)=>{
    const cartUpdate = item 
      ?
      state.map(item => item.idDrink === action.payload.idDrink 
        ?
        {
          ...item,
          quantity : item.quantity + 1
        }
        :
        item
        )
      :
        [
          ...state,
          {
            //todas las propiedades que vinen con el 
            //payload mas el quantity con valor 1
            ...action.payload,
            quantity:1
          }
        ]
        localStorage.setItem('cart',JSON.stringify(cartUpdate))
        return cartUpdate
  }
  const removeToCart= () => { 
    const cartUpdate =
     action.payload.quantity > 1 
        ?
          state.map((item) => item.idDrink === action.payload.idDrink
          ?
          {
            ...item,
            quantity : item.quantity - 1,
          }
          :
          item
          )
        :
        state.filter((item) => item.idDrink !== action.payload.idDrink);

    localStorage.setItem('cart',JSON.stringify(cartUpdate));
    return cartUpdate;
  }
  const removeAllItemFromCart = () => {
    const cartUpdate = state.filter((item) => item.idDrink !== action.payload.idDrink)  
    localStorage.setItem('cart',JSON.stringify(cartUpdate))
    return cartUpdate;
  }
  switch (action.type) {
    case types.addItemToCart:
      return addItemToCart(item);
    case types.removeItemFromCart:
      return removeToCart();
    case types.removeAllFromCart:
      return removeAllItemFromCart();
    case types.clearCart:
      localStorage.removeItem('cart')
      return [];
    default: 
      return state;
  }
};

