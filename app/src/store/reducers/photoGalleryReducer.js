import { mainTypes } from '../actions/actionTypes';

const initialState = [];

export function photoGalleryReducer(state = initialState, action) {
    switch (action.type) {
        case mainTypes.GET_PHOTO_GALLERY: {
          return [ ...action.payload ];
        }
        
        default: {
          return state;
        }
      }
  }