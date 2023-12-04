import { mainTypes } from '../actions/actionTypes';

const initialState = {
  countries: [],
};

export function countriesForSelectReducer(state = initialState, action) {
    switch (action.type) {
        case mainTypes.GET_COUNTRIES_FOR_SELECT: {
          return { ...state, countries: action.payload };
        }
        
        default: {
          return state;
        }
      }
  }