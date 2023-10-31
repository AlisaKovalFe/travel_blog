import { mainTypes } from '../actions/actionTypes';

const initialState = [];

export function aboutReducer(state = initialState, action) {
    switch (action.type) {
        case mainTypes.GET_ABOUT: {
          return [ ...action.payload ];
        }
        
        default: {
          return state;
        }
      }
  }