import { mainTypes } from './actionTypes';
import axios from 'axios'

export const getCountriesForSelectAC = (data) => ({
    type: mainTypes.GET_COUNTRIES_FOR_SELECT,
    payload: data
  })

export const getCountriesForSelectThunk = () => (dispatch) => {
    axios.get('http://localhost:4000/countiesForSelect')
      .then((res) => {
        dispatch(getCountriesForSelectAC((res.data)));
      })
  };