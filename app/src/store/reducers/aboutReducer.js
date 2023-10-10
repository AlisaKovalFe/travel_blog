import { mainTypes } from '../actions/actionTypes';

const initialState = {
  about: [],
};

export function aboutReducer(state = initialState, action) {
    switch (action.type) {
        case mainTypes.GET_ABOUT: {
          return { ...state, about: action.payload };
        }
        
        default: {
          return state;
        }
      }
  }