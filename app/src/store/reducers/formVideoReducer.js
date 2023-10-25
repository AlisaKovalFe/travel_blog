import { mainTypes } from '../actions/actionTypes';

const initialState = {
    id: Date.now(),
    country: null,
    image: '',
    description: '',
    records: [
            {
              id: Date.now(),
              city: null,
              videoUrl: null,
            }
    ]
};

export function formVideoReducer(state = initialState, action) {
    switch (action.type) {
        case mainTypes.ADD_DATA_FROM_INPUT_IN_FORM: {
          const { value, params } = action.payload
          return { ...state, [params]: value}
        }

        case mainTypes.ADD_EMPTY_VIDEO_BLOCK_IN_FORM: {
          return { ...state, records: [...state.records, {id: Date.now(), city: '', videoUrl: ''}]}
        }

        case mainTypes.ADD_VIDEO_RECORDS_FROM_INPUTS_IN_FORM: {
          const { value, params, id } = action.payload

          return { ...state, records: state.records.map((el) => {
            if (el.id === id) {
                return {
                  ...el,
                  [params]: value
              }
            }
            return el
          })}
        }

        case mainTypes.DELETE_VIDEO_RECORD_IN_FORM: {
          const { id } = action.payload
          return { ...state, records: state.records.filter((el) => el.id !== id)} 
        }

        case mainTypes.CLEAR_FORM: {
          return {
            id: null,
            country: null,
            image: null,
            description: '',
            records: [
                    {
                      id: null,
                      city: null,
                      videoUrl: null
                    }
            ]
          };
        }
        
        default: {
          return state;
        }
      }
  }