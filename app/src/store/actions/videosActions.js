import axios from 'axios'
import { mainTypes } from './actionTypes';

// получение видеокарточек с сервера
export const getVideosAC = (data) => ({
  type: mainTypes.GET_VIDEOS,
  payload: data
})

export const getVideosThunk = () => async (dispatch) => {
  const response = await axios.get('http://localhost:4000/video', {
    'Sec-CH-UA': '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"'
  })
  return dispatch(getVideosAC(response.data))
};

// добавление видеокарточки на фронт и бэк
export const addVideoAC = (data) => ({
  type: mainTypes.ADD_VIDEO_CARD,
  payload: data
})

export const addVideosThunk = (data) => async (dispatch) => {
  await axios.post('http://localhost:4000/video', { videoCard: data })
    .then((response) => {
      if (response.status === 200) {
      dispatch(addVideoAC(data))
  }})
}

// редактирование видеокарточки

export const editVideoAC = (data) => ({
  type: mainTypes.EDIT_VIDEO_CARD,
  payload: data
})

export const editVideosThunk = (data) => async (dispatch) => {
  await axios.put('http://localhost:4000/video', { videoCard: data })
    .then((response) => {
      if (response.status === 200) {
      dispatch(editVideoAC(data))
  }})
}

// удаление видеокарточки на фронте и бэке
export const deleteVideoAC = (data) => ({
  type: mainTypes.DElETE_VIDEO_CARD,
  payload: data
})

export const deleteVideosThunk = (data) => async (dispatch) => {
  dispatch(deleteVideoAC(data))    // почему-то если я писала это после delete запроса, то это строка уже не читалась
  await axios.delete(`http://localhost:4000/video/${data.id}`)
}
