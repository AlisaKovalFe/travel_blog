import { mainTypes } from '../actions/actionTypes';

const initialState = {};

export function videosReducer(state = initialState, action) {
    switch (action.type) {
        case mainTypes.GET_VIDEOS: {          
          return { ...action.payload };
        }

        case mainTypes.ADD_VIDEO_CARD: {
          return {...state, videosInfo: [action.payload, ...state.videosInfo ] } 
        }

        case mainTypes.EDIT_VIDEO_CARD: {
          const { id, image, description, records } = action.payload
          return {...state, videosInfo: state.videosInfo.map((el) => {
            if (el.id === id) {
              return {
                ...el,
                cover: {
                  src: image,
                  alt: description
              },
              records: records
              }
            }
            return el
          })} 
        }

        case mainTypes.DElETE_VIDEO_CARD: {
          const { id } = action.payload
          return {...state, videosInfo: state.videosInfo.filter((el) => el.id !== id) } 
        }

        default: {
          return state;
        }
      }
  }