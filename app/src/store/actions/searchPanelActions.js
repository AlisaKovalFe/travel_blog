import { mainTypes } from './actionTypes';

export const addDataFromInputInSearchPanelAC = (data) => ({
    type: mainTypes.ADD_DATA_FROM_INPUT_TO_SEARCH_PANEL,
    payload: data
  })

export const clearSearchPanelAC = () => ({
  type: mainTypes.CLEAR_SEARCH_PANEL,
  })


