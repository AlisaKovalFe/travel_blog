import { mainTypes } from '../actions/actionTypes';

const initialState = {
    id: Date.now(),
    country: '',
    image: '',
    description: '',
    records: [
            {
              id: Date.now(),
              city: '',
              videoUrl: '',
            }
    ]
};

export function formVideoReducer(state = initialState, action) {
    switch (action.type) {
        case mainTypes.ADD_VIDEO_INPUT: {
          const { value, params } = action.payload
          return { ...state, [params]: value}
        }

        case mainTypes.ADD_VIDEO_RECORDS_INPUT: {
          const { value, params, index } = action.payload
          console.log(action.payload)

          return { ...state, records: [...state.records, {...state.records[index], id: index, [params]: value}]}
        }

        case mainTypes.ADD_EMPTY_VIDEO_BLOCK: {
          return { ...state, records: [...state.records, {id: Date.now(), city: '', videoUrl: ''}]}
        }

        case mainTypes.DELETE_VIDEO_RECORD: {
          const { id } = action.payload
          return { ...state, records: state.records.filter((el) => el.id !== id)} 
        }
        
        default: {
          return state;
        }
      }
  }