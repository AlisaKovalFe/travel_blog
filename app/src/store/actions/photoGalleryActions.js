import { mainTypes } from './actionTypes';
import axios from 'axios'

export const addPhotoGalleryAC = (data) => ({
    type: mainTypes.ADD_PHOTO_GALLERY,
    payload: data
  })

export const addPhotoGalleryThunk = () => (dispatch) => {
    axios.get('http://localhost:4000/photoGallery')
      .then((res) => {
        dispatch(addPhotoGalleryAC((res.data)));
      })
  };