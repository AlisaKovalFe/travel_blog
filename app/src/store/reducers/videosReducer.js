import { mainTypes } from '../actions/actionTypes';

const initialState = {
  videos: [],
};

export function videosReducer(state = initialState, action) {
    switch (action.type) {
        case mainTypes.ADD_VIDEOS: {
          return { ...state, videos: action.payload };
        }
        
        default: {
          return state;
        }
      }
  }