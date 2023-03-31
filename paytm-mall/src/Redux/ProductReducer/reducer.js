import {
  ELECTRONIC_SUCCESS,
  FAILURE,
  GLASS_SUCCESS,
  REQUESTED,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  Electronics: [],
  Galsses: [],
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
    default: {
      return state;
    }
  }
};
