import axios from 'axios'
import { mainTypes } from './actionTypes';

export const getHelpersAC = (data) => ({
    type: mainTypes.GET_HELPERS,
    payload: data
  })

export const getHelpersThunk = () => (dispatch) => {
    axios.get('http://localhost:4000/helpers')
      .then((res) => {
        dispatch(getHelpersAC((res.data)));
      })
  };