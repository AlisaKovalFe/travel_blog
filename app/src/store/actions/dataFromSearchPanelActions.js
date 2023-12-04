import { mainTypes } from './actionTypes';

export const addDataFromSearchPanelAC = (data) => ({
    type: mainTypes.ADD_DATA_FROM_SEARCH_PANEL,
    payload: data
})

export const addDataFromInputOfVideoTitleAC = (data) => ({
    type: mainTypes.ADD_DATA_FROM_INPUT_OF_VIDEO_TITLE,
    payload: data
})