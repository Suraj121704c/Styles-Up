import {
  PRODUCT_ADD_CART_FAILURE,
  PRODUCT_ADD_CART_REQUEST,
  PRODUCT_ADD_CART_SUCCESS,
  PRODUCT_DELETE_CART_FAILURE,
  PRODUCT_DELETE_CART_REQUEST,
  PRODUCT_DELETE_CART_SUCCESS,
  PRODUCT_GET_CART_SUCESS,
  PRODUCT_ORDER_PLACED_SUCCESS,
} from "./actionType";
import axios from "axios";

// Product Add cart actions
export const productaddRequestAction = () => {
  return { type: PRODUCT_ADD_CART_REQUEST };
};
export const productaddSuccessAction = (payload) => {
  return { type: PRODUCT_ADD_CART_SUCCESS, payload };
};
export const productaddFailureAction = () => {
  return { type: PRODUCT_ADD_CART_FAILURE };
};

//Product delete cart actions

export const productdeleteRequestAction = () => ({
  type: PRODUCT_DELETE_CART_REQUEST,
});
export const productdeleteSuccessAction = () => ({
  type: PRODUCT_DELETE_CART_SUCCESS,
});
export const productdeleteFailureAction = () => ({
  type: PRODUCT_DELETE_CART_FAILURE,
});
export const productgetCartSuccess = (payload) => ({
  type: PRODUCT_GET_CART_SUCESS,
  payload,
});
export const productorderPlacedSuccess = () => ({
  type: PRODUCT_ORDER_PLACED_SUCCESS,
});

// export const singleProductUserPageData= (dispatch) => {
//     dispatch(userRequestAction());
//     axios
//       .get(`https://hilarious-erin-shift.cyclic.app/fashion/${1}`)
//       .then((res) => {
//         dispatch(userSuccessAction(res.data));
//       })
//       .catch((err) => {
//         dispatch(userFailureAction());
//       });
//   };

// export const productaddToCart = (id, userData, newData,success,fail) => (dispatch) => {
//   // console.log("rakesh kumar");
//   newData.item = 1;
//   userData.cart.push(newData)
//   dispatch(productaddRequestAction());
//   return axios.post(`https://hilarious-erin-shift.cyclic.app/fashion/${id}`,userData).then((res) => {
//     dispatch(productaddSuccessAction());
//     success()
//   }).catch((err) => {
//     dispatch(productaddFailureAction());
//     fail()
//   })

// }

export const productdeleteCartData = (id, cart, userData) => (dispatch) => {
  userData.cart = cart;
  dispatch(productdeleteRequestAction());
  return axios
    .put(`https://hilarious-erin-shift.cyclic.app/fashion/${id}`, userData)
    .then(() => {
      dispatch(productdeleteSuccessAction());
    })
    .catch((err) => {
      dispatch(productdeleteFailureAction());
    });
};

export const addToCart = (data) => (dispatch) => {
  dispatch(productaddRequestAction());
  axios
    .post("https://growup.onrender.com/orders", data)
    .then((res) => {
      dispatch(productaddSuccessAction());
      console.log(res);
    })
    .catch((err) => {
      dispatch(productaddFailureAction());
      console.log(err);
    });
};
