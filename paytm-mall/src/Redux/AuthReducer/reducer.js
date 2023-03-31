import { PRODUCT_ADD_CART_FAILURE, PRODUCT_ADD_CART_REQUEST, PRODUCT_ADD_CART_SUCCESS,
     PRODUCT_DELETE_CART_FAILURE,
     PRODUCT_DELETE_CART_REQUEST,
     PRODUCT_DELETE_CART_SUCCESS,
     PRODUCT_GET_CART_SUCESS, 
     PRODUCT_ORDER_PLACED_SUCCESS} from "./actionType";
 
const initialState = {
    isLoading: false,
    isError: false,
    cart:[]
  };

  export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      
      case PRODUCT_GET_CART_SUCESS:
        return { ...state, isLoading: false, cart:payload };  
      case PRODUCT_ADD_CART_REQUEST:
        return { ...state, isLoading: true };
      case PRODUCT_ADD_CART_SUCCESS:
        return { ...state, isLoading: false,cart:[...state.cart,payload] };
      case PRODUCT_ADD_CART_FAILURE:
        return { ...state, isLoading: false, isError: true };
      case PRODUCT_DELETE_CART_REQUEST:
        return { ...state, isLoading: true };
      case PRODUCT_DELETE_CART_SUCCESS:
        return { ...state, isLoading: false };
      case PRODUCT_DELETE_CART_FAILURE:
        return { ...state, isLoading: false, isError: true };
      case PRODUCT_ORDER_PLACED_SUCCESS:
        return { ...state, isLoading: false,cart:[]};  
      default:
        return state;
    }
  };
  