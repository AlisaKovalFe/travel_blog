import { mainTypes } from './actionTypes';
import axios from 'axios'

export const adHelpersAC = (data) => ({
    type: mainTypes.ADD_HELPERS,
    payload: data
  })

export const addHelpersThunk = () => (dispatch) => {
    axios.get('http://localhost:4000/helpers')
      .then((res) => {
        dispatch(adHelpersAC((res.data)));
      })
  };