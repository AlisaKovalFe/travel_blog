import { mainTypes } from '../actions/actionTypes';

const initialState = {
  helpers: {},
};

export function helpersReducer(state = initialState, action) {
    switch (action.type) {
        case mainTypes.GET_HELPERS: {
          return { ...state, helpers: action.payload };
        }
        
        default: {
          return state;
        }
      }
  }