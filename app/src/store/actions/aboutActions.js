import axios from 'axios'
import { mainTypes } from './actionTypes';

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