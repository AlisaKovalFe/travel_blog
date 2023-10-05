import { mainTypes } from './actionTypes';
import axios from 'axios'

export const addDestinationsAC = (data) => ({
    type: mainTypes.ADD_DESTINATIONS,
    payload: data
  })

export const addDestinationsThunk = () => (dispatch) => {
    axios.get('http://localhost:4000/destinations')
      .then((res) => {
        dispatch(addDestinationsAC((res.data)));
      })
  };