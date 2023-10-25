import { mainTypes } from '../actions/actionTypes';

const initialState = {
  videos: {},
};

export function videosReducer(state = initialState, action) {
    switch (action.type) {
        case mainTypes.GET_VIDEOS: {          
          return { ...state, videos: action.payload };
        }

        case mainTypes.ADD_VIDEO_CARD: {
          console.log(action.payload)
          return { ...state, videos: {...state.videos, videosInfo: [...state.videos.videosInfo, action.payload ] } }
        }

        case mainTypes.DElETE_VIDEO_CARD: {
          const { id } = action.payload
          console.log(id)
          return { ...state, videos: {...state.videos, videosInfo: state.videos.videosInfo.filter((el) => el.id !== id) } }
        }
        
        default: {
          return state;
        }
      }
  }