import { mainTypes } from '../actions/actionTypes';

const initialState = {};

export function dataFromSearchPanelReducer(state = initialState, action) {
    switch (action.type) {
        case mainTypes.ADD_DATA_FROM_SEARCH_PANEL: {    
          return { ...action.payload };
        }

        default: {
          return state;
        }
      }
  }