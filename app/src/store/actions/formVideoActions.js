import { mainTypes } from './actionTypes';

export const addVideoInputAC = (data) => ({
    type: mainTypes.ADD_VIDEO_INPUT,
    payload: data
  })


  export const addVideoRecordsInputAC = (data) => ({
    type: mainTypes.ADD_VIDEO_RECORDS_INPUT,
    payload: data
  })


  export const addEmptyVideoInputAC = (data) => ({
    type: mainTypes.ADD_EMPTY_VIDEO_BLOCK,
    payload: data
  })

  

export const deleteVideoRecordAC = (id) => ({
    type: mainTypes.DELETE_VIDEO_RECORD,
    payload: id
  })



