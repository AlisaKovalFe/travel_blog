import { mainTypes } from './actionTypes';
import axios from 'axios'

export const addGreetingAC = (data) => ({
    type: mainTypes.ADD_GREETING,
    payload: data
  })

export const addGreetingThunk = () => (dispatch) => {
    axios.get('http://localhost:4000')
      .then((res) => {
        dispatch(addGreetingAC((res.data)));
      })
  };