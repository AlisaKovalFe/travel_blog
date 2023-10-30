import { mainTypes } from './actionTypes';
import axios from 'axios'

//получение видеокарточек с сервера
export const getVideosAC = (data) => ({
  type: mainTypes.GET_VIDEOS,
  payload: data
})

export const getVideosThunk = () => async (dispatch) => {
  const response = await axios.get('http://localhost:4000/video')
  return dispatch(getVideosAC(response.data))
};

//добавление видеокарточки на фронт и бэк
export const addVideoAC = (data) => ({
  type: mainTypes.ADD_VIDEO_CARD,
  payload: data
})


export const getErrorsOfVideoAC = (data) => ({
  type: mainTypes.GET_ERRORS_OF_VIDEO_RESPONSE_FROM_SERVER,
  payload: data
})

export const addVideosThunk = (data) => async (dispatch) => {
  await axios.post('http://localhost:4000/video', { videoCard: data })
    .then((response) => {
      if (response.status === 200) {
      dispatch(addVideoAC(data))
  }})
}

//удаление видеокарточки на фронте и бэке
export const deleteVideoAC = (data) => ({
  type: mainTypes.DElETE_VIDEO_CARD,
  payload: data
})

export const deleteVideosThunk = (data) => async (dispatch) => {
  dispatch(deleteVideoAC(data))    // почему-то если я писала это после delete запроса, то это строка уже не читалась
  await axios.delete(`http://localhost:4000/video/${data.id}`)
}
