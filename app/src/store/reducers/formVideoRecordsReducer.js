import { mainTypes } from '../actions/actionTypes';

const initialState = {
  videoRecors: [],
};

export function formVideoRecordsReducer(state = initialState, action) {
    switch (action.type) {

        case mainTypes.ADD_VIDEO_RECORD: {
          console.log(action.payload)
          return { ...state, videoRecors: [...state.videoRecors, action.payload]}  
        }

        case mainTypes.DELETE_VIDEO_RECORD: {
          console.log(action.payload)
          return { ...state, videoRecors: state.videoRecors.filter((el) => el.id !== action.payload)}  
        }
        
        default: {
          return state;
        }
      }
  }