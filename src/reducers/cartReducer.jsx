import {types} from '../types'

export const cartReducer = (state = [], action) => {
  const item = state.find(item => item.idDrink === action.payload.idDrink)

  switch (action.type) {
    case types.addItemToCart:
      return item 
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
    case types.removeItemFromCart:
      return (
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
        state.filter((item) => item.idDrink !== action.payload.idDrink)
      )
    case types.removeAllFromCart:
      return state.filter((item) => item.idDrink !== action.payload.idDrink)  
    default: 
      return state;
  }
};

