import { mainTypes } from '../actions/actionTypes';

const initialState = []

export function mainReducer(state = initialState, action) {
    switch (action.type) {
        case mainTypes.GET_DESTINATIONS: {
          return [ ...action.payload ];
        }
        
        default: {
          return state;
        }
      }
  }