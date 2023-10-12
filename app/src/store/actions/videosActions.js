import { mainTypes } from './actionTypes';
import axios from 'axios'

export const getVideosAC = (data) => ({
    type: mainTypes.GET_VIDEOS,
    payload: data
  })

export const getVideosThunk = () => async (dispatch) => {
  const response = await axios.get('http://localhost:4000/video')
  return dispatch(getVideosAC(response.data))
  };



export const addVideoAC = (data) => ({
  type: mainTypes.ADD_VIDEO_CARD,
  payload: data
})


//так ок писать?
export const addVideosThunk = (data) => async (dispatch) => {
    const response = await axios.post('http://localhost:4000/video', data)
    dispatch(addVideoAC(response))              
}

export const deleteVideoAC = (id) => ({
  type: mainTypes.DElETE_VIDEO_CARD,
  payload: id
})
