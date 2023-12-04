import axios from 'axios'
import { mainTypes } from './actionTypes'

export const getGreetingAC = (data) => ({
    type: mainTypes.GET_GREETING,
    payload: data
  })

export const getGreetingThunk = () => (dispatch) => {
    axios.get('http://localhost:4000/')
      .then((res) => {
        dispatch(getGreetingAC((res.data)));
      })
  };