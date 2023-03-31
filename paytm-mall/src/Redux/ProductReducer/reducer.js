import {
  AUTOMOBILES_SUCCESS,
  DECORATION_SUCCESS,
  ELECTRONIC_SUCCESS,
  FAILURE,
  GLASS_SUCCESS,
  JEWELLERY_SUCCESS,
  REQUESTED,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  Electronics: [],
  Galsses: [],
  Jewellery: [],
  Decoration: [],
  Auto: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REQUESTED: {
      return { ...state, isLoading: true };
    }
    case ELECTRONIC_SUCCESS: {
      return { ...state, isLoading: false, Electronics: payload };
    }
    case FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    case GLASS_SUCCESS: {
      return { ...state, isLoading: false, Galsses: payload };
    }
    case JEWELLERY_SUCCESS: {
      return { ...state, isLoading: false, Jewellery: payload };
    }
    case DECORATION_SUCCESS: {
      return { ...state, isLoading: false, Decoration: payload };
    }
    case AUTOMOBILES_SUCCESS: {
      return { ...state, isLoading: false, Auto: payload };
    }
    default: {
      return state;
    }
  }
};
