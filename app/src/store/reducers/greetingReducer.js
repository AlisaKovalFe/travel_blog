import { mainTypes } from '../actions/actionTypes';

const initialState = {
  greeting: {},
};

export function greetingReducer(state = initialState, action) {
    switch (action.type) {
        case mainTypes.GET_GREETING: {
          return { ...state, greeting: action.payload };
        }
        
        default: {
          return state;
        }
      }
  }