import { mainTypes } from './actionTypes';
import axios from 'axios'

export const getAboutAC = (data) => ({
    type: mainTypes.GET_ABOUT,
    payload: data
  })

export const getAboutThunk = () => (dispatch) => {
    axios.get('http://localhost:4000/about')
      .then((res) => {
        dispatch(getAboutAC((res.data)));
      })
  };