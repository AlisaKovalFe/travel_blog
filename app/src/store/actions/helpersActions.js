import { mainTypes } from './actionTypes';
import axios from 'axios'

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