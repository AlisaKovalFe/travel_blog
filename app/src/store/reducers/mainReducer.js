import { mainTypes } from '../actions/actionTypes';

const initialState = {
  destinations: [],
};

export function mainReducer(state = initialState, action) {
    switch (action.type) {
        case mainTypes.ADD_DESTINATIONS: {
          return { ...state, destinations: action.payload };
        }
        
        default: {
          return state;
        }
      }
  }