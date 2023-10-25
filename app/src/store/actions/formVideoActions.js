import { mainTypes } from './actionTypes';

export const addDataFromInputInFormAC = (data) => ({
    type: mainTypes.ADD_DATA_FROM_INPUT_IN_FORM,
    payload: data
  })

export const addVideoRecordsFromInputsInFormAC = (data) => ({
  type: mainTypes.ADD_VIDEO_RECORDS_FROM_INPUTS_IN_FORM,
  payload: data
  })

export const addEmptyVideoBlockInFormAC = () => ({
  type: mainTypes.ADD_EMPTY_VIDEO_BLOCK_IN_FORM,
  })

export const deleteVideoRecordInFormAC = (id) => ({
    type: mainTypes.DELETE_VIDEO_RECORD_IN_FORM,
    payload: id
  })

export const clearFormAC = () => ({
  type: mainTypes.CLEAR_FORM,
  })


