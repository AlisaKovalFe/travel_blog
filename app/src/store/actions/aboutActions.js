import { mainTypes } from './actionTypes';
import axios from 'axios'

export const addAboutAC = (data) => ({
    type: mainTypes.ADD_ABOUT,
    payload: data
  })

export const addAboutThunk = () => (dispatch) => {
    axios.get('http://localhost:4000/about')
      .then((res) => {
        dispatch(addAboutAC((res.data)));
      })
  };