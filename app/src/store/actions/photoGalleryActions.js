import axios from 'axios'
import { mainTypes } from './actionTypes';

export const getPhotoGalleryAC = (data) => ({
    type: mainTypes.GET_PHOTO_GALLERY,
    payload: data
  })

export const getPhotoGalleryThunk = () => (dispatch) => {
    axios.get('http://localhost:4000/photoGallery')
      .then((res) => {
        dispatch(getPhotoGalleryAC((res.data)));
      })
  };