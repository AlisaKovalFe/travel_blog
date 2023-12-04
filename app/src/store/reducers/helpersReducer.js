import { mainTypes } from '../actions/actionTypes';

const initialState = {};

export function helpersReducer(state = initialState, action) {
    switch (action.type) {
        case mainTypes.GET_HELPERS: {
          return { ...action.payload };
        }
        
        default: {
          return state;
        }
      }
  }