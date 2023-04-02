import {
  ADD_CART_FAILURE,
  ADD_CART_REQUEST,
  ADD_CART_SUCCESS,
  DELETE_CART_FAILURE,
  DELETE_CART_REQUEST,
  DELETE_CART_SUCCESS,
  GET_CART_SUCESS,
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  ORDER_PLACED_SUCCESS,
  POST_SIGNIN_FAILURE,
  POST_SIGNIN_REQUEST,
  POST_SIGNIN_SUCCESS,
  SET_LOGIN_REQUEST,
  SET_LOGOUT_REQUEST,
} from "./actiontypes";
import axios from "axios";

// signup actions
export const signupRequestAction = () => {
  return { type: POST_SIGNIN_REQUEST };
};

export const signupSuccessAction = () => {
  return { type: POST_SIGNIN_SUCCESS };
};

export const signupFailureAction = () => {
  return { type: POST_SIGNIN_FAILURE };
};

//login actions

export const userRequestAction = () => {
  return { type: GET_USER_REQUEST };
};

export const userSuccessAction = (payload) => {
  return { type: GET_USER_SUCCESS, payload };
};

export const userFailureAction = () => {
  return { type: GET_USER_FAILURE };
};

export const setLoginAction = () => {
  return { type: SET_LOGIN_REQUEST };
};

export const setLogoutAction = () => {
  return { type: SET_LOGOUT_REQUEST };
};

// Add cart actions
export const addRequestAction = () => {
  return { type: ADD_CART_REQUEST };
};
export const addSuccessAction = (payload) => {
  return { type: ADD_CART_SUCCESS,payload };
};
export const addFailureAction = () => {
  return { type: ADD_CART_FAILURE };
};

// delete cart actions

export const deleteRequestAction = () =>({ type: DELETE_CART_REQUEST });
export const deleteSuccessAction = () => ({ type: DELETE_CART_SUCCESS })
export const deleteFailureAction = () => ({ type: DELETE_CART_FAILURE })
export const getCartSuccess=(payload)=>({type:GET_CART_SUCESS,payload})
export const orderPlacedSuccess=()=>({type:ORDER_PLACED_SUCCESS})

// singup function

export const signup = (user, newToastSucess, newToastFail) => (dispatch) => {
  dispatch(signupRequestAction());
  return axios
    .post(`https://universal-mall-api.onrender.com/users`, user)
    .then(() => {
      dispatch(signupSuccessAction());
      newToastSucess();
    })
    .catch((err) => {
      dispatch(signupFailureAction());
      newToastFail();
    });
};

export const getUsers = (dispatch) => {
  dispatch(userRequestAction());
  axios
    .get(`https://universal-mall-api.onrender.com/users`)
    .then((res) => {
      dispatch(userSuccessAction(res.data));
    })
    .catch((err) => {
      dispatch(userFailureAction());
    });
};

export const setLogin = (dispatch) => {
  localStorage.setItem("isAuth", true);
  dispatch(setLoginAction());
};

export const setLogout = (dispatch) => {
  localStorage.setItem("isAuth", false);
  localStorage.setItem("userId", false);
  localStorage.setItem("adminId", false);
  dispatch(setLogoutAction());
};

export const getCartData=(userId)=>(dispatch)=>{
  return axios.get(`https://universal-mall-api.onrender.com/carts?userId=${userId}`).then(res=>dispatch(getCartSuccess(res.data)));
}

export const addToCart = (userData, productData) => async (dispatch) => {
  const details = {
    userId: userData.id,
    username: userData.name,
    useremail: userData.email,
    brand: productData.brand,
    description: productData.description,
    img: productData.img,
    originalPrice: productData.originalPrice,
    category: productData.category,
    subCategory: productData.subCategory,
    gender: productData.gender,
    price: productData.originalPrice - productData.discountPrice,
    discountPrice: productData.discountPrice,
    quantity:1,
    status:'pending'
  };
  dispatch(addRequestAction());
  return axios.post(`https://universal-mall-api.onrender.com/carts`, details)
    .then(() => {
      dispatch(addSuccessAction(details));
    })
    .catch(() => {
      dispatch(addFailureAction());
    });
};

export const deleteCartData = (id, cart, userData) => async(dispatch) => {
  userData.cart = cart;
  dispatch(deleteRequestAction());
  return axios
    .put(`https://universal-mall-api.onrender.com/users/${id}`, userData)
    .then(() => {
      dispatch(deleteSuccessAction());
    })
    .catch((err) => {
      dispatch(deleteFailureAction());
    });
};

export const orderPlaced=(cart)=>async(dispatch)=>{
  cart.forEach((singleCart)=>{
    axios.delete(`https://universal-mall-api.onrender.com/carts/${singleCart.id}`)
    axios.post('https://universal-mall-api.onrender.com/orders',singleCart) 
  })
  dispatch(orderPlacedSuccess());
  return Promise.resolve().then(res=>res);

  //  getting 404 error while replacing 
  //  const {data:ordersArray} = await axios.get(`https://universal-mall-api.onrender.com/orders`);
  //  const newOrdersArray = [...ordersArray]
  //  cart.forEach(singleCart=>newOrdersArray.push(singleCart));
  //  axios.put(`https://universal-mall-api.onrender.com/orders`,newOrdersArray).then((res)=>dispatch(orderPlacedSuccess(res.data)));
}

export const getOrders=async(userId)=>{
  return axios.get(`https://universal-mall-api.onrender.com/orders?userId=${userId}`);
}