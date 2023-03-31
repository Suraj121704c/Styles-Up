import {
   GET_CAROSELS_DATA_FAILURE,
   GET_CAROSELS_DATA_REQUEST,
   GET_CAROSELS_DATA_SUCCESS,
   GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS


} from "./actiontypes";

const initialState = {  allcarosels: {},isLoading: false, products: [], isError: false}
export const reducer = (state = initialState, { type, payload }) => {
   switch (type) {
      case GET_PRODUCTS_REQUEST: return { ...state, isLoading: true }
      case GET_PRODUCTS_SUCCESS: return { ...state, isLoading: false, products: payload }
      case GET_PRODUCTS_FAILURE: return { ...state, isLoading: false, isError: true }
      case GET_CAROSELS_DATA_REQUEST:
         return { ...state, isLoading: true };
      case GET_CAROSELS_DATA_SUCCESS:
         return { ...state, isLoading: false, allcarosels: { ...payload }, isError: false };
      case GET_CAROSELS_DATA_FAILURE:
         return { ...state, isLoading: false, isError: true };
      default: return state;
   }
}