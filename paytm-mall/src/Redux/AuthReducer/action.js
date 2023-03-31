import { PRODUCT_ADD_CART_FAILURE,
     PRODUCT_ADD_CART_REQUEST, PRODUCT_ADD_CART_SUCCESS, 
     PRODUCT_DELETE_CART_FAILURE, PRODUCT_DELETE_CART_REQUEST, PRODUCT_DELETE_CART_SUCCESS, PRODUCT_GET_CART_SUCESS, PRODUCT_ORDER_PLACED_SUCCESS } from "./actionType";

// Product Add cart actions
export const productaddRequestAction = () => {
    return { type:PRODUCT_ADD_CART_REQUEST};
  };
  export const productaddSuccessAction = (payload) => {
    return { type: PRODUCT_ADD_CART_SUCCESS,payload };
  };
  export const productaddFailureAction = () => {
    return { type: PRODUCT_ADD_CART_FAILURE };
  };
  
  //Product delete cart actions

export const productdeleteRequestAction = () =>({ type: PRODUCT_DELETE_CART_REQUEST });
export const productdeleteSuccessAction = () => ({ type: PRODUCT_DELETE_CART_SUCCESS })
export const productdeleteFailureAction = () => ({ type: PRODUCT_DELETE_CART_FAILURE })
export const productgetCartSuccess=(payload)=>({type:PRODUCT_GET_CART_SUCESS,payload})
export const productorderPlacedSuccess=()=>({type:PRODUCT_ORDER_PLACED_SUCCESS})

export const singleProductUserPageData= (dispatch) => {
    dispatch(userRequestAction());
    axios
      .get(`https://hilarious-erin-shift.cyclic.app/fashion/${1}`)
      .then((res) => {
        dispatch(userSuccessAction(res.data));
      })
      .catch((err) => {
        dispatch(userFailureAction());
      });
  };
  