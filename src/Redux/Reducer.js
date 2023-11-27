import { ADD_TO_CART, CLEAR_CART, REMOVE_TO_CART } from "./Constant";

const init = {
  cart: [],
  remove: [],
};

export const ProductReducer = (state = init, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      console.log("ADD TO CART", action);
      return {
        ...state,
        cart: [...state.cart, action.data],
      };
    }
    case REMOVE_TO_CART: {
      console.log("Previous state:", state.cart);
      console.log("Action:", action);
    
      const updatedCart = state.cart.filter((item) => item.id !== action.remove);
    
      console.log("Updated cart:", updatedCart);
    
      return {
        ...state,
        cart: updatedCart,
        remove: action.remove,
      };
    }
    case CLEAR_CART: {    
      return {
        ...state,
        cart:[]
      };
    }
    default:
      return state;
  }
};
