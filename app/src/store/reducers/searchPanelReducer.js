import { mainTypes } from '../actions/actionTypes';

const initialState = {
    country: '',
    city: '',
    videoTitle: '',
    date: '',
    isRecentlyAdded: false,
    timeStamp: null,
};

export function searchPanelReducer(state = initialState, action) {
    switch (action.type) {
        case mainTypes.ADD_DATA_FROM_INPUT_TO_SEARCH_PANEL: {
          const { value, params } = action.payload
          return { ...state, [params]: value }
        }

        case mainTypes.CLEAR_SEARCH_PANEL: {
          return {
            country: '',
            city: '',
            videoTitle: '',
            date: '',
            idRecentlyAdded: null,
            timeStamp: null
          };
        }
        
        default: {
          return state;
        }
      }
  }