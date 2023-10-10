import { mainTypes } from './actionTypes';
import axios from 'axios'

export const getVideosAC = (data) => ({
    type: mainTypes.GET_VIDEOS,
    payload: data
  })

export const getVideosThunk = () => (dispatch) => {
    axios.get('http://localhost:4000/video', {
        headers: {
          'Access-Control-Allow-Origin': 'https://www.youtube.com', 
        }
        
      })
      .then((res) => {
        dispatch(getVideosAC((res.data)));
      })
  };

export const addVideoAC = (videoData) => ({
  type: mainTypes.ADD_VIDEO_CARD,
  payload: videoData
})

export const deleteVideoAC = (id) => ({
  type: mainTypes.DELETE_VIDEO_CARD,
  payload: id
})
