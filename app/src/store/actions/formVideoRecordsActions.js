import { mainTypes } from './actionTypes';

export const addVideoRecordAC = (data) => ({
    type: mainTypes.ADD_VIDEO_RECORD,
    payload: data
  })

export const deleteVideoRecordAC = (id) => ({
    type: mainTypes.DELETE_VIDEO_RECORD,
    payload: id
  })

