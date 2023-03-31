import axios from "axios";
import {
  AUTOMOBILES_SUCCESS,
  DECORATION_SUCCESS,
  ELECTRONIC_SUCCESS,
  FAILURE,
  GLASS_SUCCESS,
  JEWELLERY_SUCCESS,
  REQUESTED,
} from "./actionTypes";

export const getELectronics = (paramObj) => (dispatch) => {
  dispatch({ type: REQUESTED });
  axios
    .get(`https://growup.onrender.com/electronics?_limit=12`, paramObj)
    .then((res) => {
      console.log(res);
      dispatch({ type: ELECTRONIC_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FAILURE });
    });
};

export const getGlasses = (paramObj) => (dispatch) => {
  dispatch({ type: REQUESTED });
  axios
    .get(`https://easy-pink-bull-shoe.cyclic.app/Products?_limit=16`, paramObj)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: GLASS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FAILURE });
    });
};

export const getJewellery = (paramObj) => (dispatch) => {
  dispatch({ type: REQUESTED });
  axios
    .get(`https://hilarious-erin-shift.cyclic.app/fashion?_limit=12`, paramObj)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: JEWELLERY_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FAILURE });
    });
};

export const getDecoration = (paramObj) => (dispatch) => {
  dispatch({ type: REQUESTED });
  axios
    .get(
      `https://hilarious-erin-shift.cyclic.app/home_decoration?_limit=12`,
      paramObj
    )
    .then((res) => {
      console.log(res.data);
      dispatch({ type: DECORATION_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FAILURE });
    });
};

export const getAuto = (paramObj) => (dispatch) => {
  dispatch({ type: REQUESTED });
  axios
    .get(
      `https://hilarious-erin-shift.cyclic.app/automobiles`,
      paramObj
    )
    .then((res) => {
      console.log(res.data);
      dispatch({ type: AUTOMOBILES_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FAILURE });
    });
};