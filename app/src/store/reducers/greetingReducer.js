import { mainTypes } from '../actions/actionTypes';

const initialState = {};

export function greetingReducer(state = initialState, action) {
    switch (action.type) {
        case mainTypes.GET_GREETING: {
          return { ...action.payload };
        }
        
        default: {
          return state;
        }
      }
  }