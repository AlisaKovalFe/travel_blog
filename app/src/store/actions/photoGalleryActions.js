import { mainTypes } from './actionTypes';
import axios from 'axios'

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