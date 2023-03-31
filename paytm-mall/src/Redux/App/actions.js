import {
  GET_CAROSELS_DATA_FAILURE,
  GET_CAROSELS_DATA_REQUEST,
  GET_CAROSELS_DATA_SUCCESS,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS
} from "./actiontypes";
import axios from "axios";

const getProductsRequest = () => ({ type: GET_PRODUCTS_REQUEST });
const getProductsSuccess = (payload) => ({ type: GET_PRODUCTS_SUCCESS, payload });
const getProductstFailure = () => ({ type: GET_PRODUCTS_FAILURE });
export const getCaroselsDataRequest = () => {
  return { type: GET_CAROSELS_DATA_REQUEST }
}

export const getCaroselsDataSuccess = (payload) => {
  return { type: GET_CAROSELS_DATA_SUCCESS, payload }
}

export const getCaroselsDataFailure = () => {
  return { type: GET_CAROSELS_DATA_FAILURE }
}




export const getProduct = (param) => (dispatch) => {
  dispatch(getProductsRequest());
  axios.get("https://universal-mall-api.onrender.com/products", param).then((res) => {
    //    console.log(res.data)
    dispatch(getProductsSuccess(res.data))
  }).catch((err) => {
    dispatch(getProductstFailure());
  })
}

export const getCarosels = (dispatch) => {
  dispatch(getCaroselsDataRequest())
  axios.get(`https://paytmmallserver.onrender.com/allcarosels`).then((res) => {
    dispatch(getCaroselsDataSuccess(res.data))
    // console.log(res.data);
  }).catch((err) => {
    dispatch(getCaroselsDataFailure());
    // console.log(err);
  })
}