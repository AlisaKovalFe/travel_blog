import { mainTypes } from './actionTypes';
import axios from 'axios'

export const getDestinationsAC = (data) => ({
    type: mainTypes.GET_DESTINATIONS,
    payload: data
  })

export const getDestinationsThunk = () => (dispatch) => {
    axios.get('http://localhost:4000/destinations')
      .then((res) => {
        dispatch(getDestinationsAC((res.data)));
      })
  };