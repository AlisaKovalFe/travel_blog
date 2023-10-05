import { mainTypes } from './actionTypes';
import axios from 'axios'

export const addVideosAC = (data) => ({
    type: mainTypes.ADD_VIDEOS,
    payload: data
  })

export const addVideosThunk = () => (dispatch) => {
    axios.get('http://localhost:4000/video')
      .then((res) => {
        dispatch(addVideosAC((res.data)));
      })
  };