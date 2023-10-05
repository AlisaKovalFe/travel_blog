import { mainTypes } from '../actions/actionTypes';

const initialState = {
    photoGallery: [],
};

export function photoGalleryReducer(state = initialState, action) {
    switch (action.type) {
        case mainTypes.ADD_PHOTO_GALLERY: {
          return { ...state, photoGallery: action.payload };
        }
        
        default: {
          return state;
        }
      }
  }