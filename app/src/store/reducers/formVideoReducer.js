import { mainTypes } from '../actions/actionTypes';

const initialState = {
  videoCard: {
    id: Date.now(),
    country: '',
    image: '',
    description: '',
    records: [
            {
              id: Date.now(),
              city: null,
              videoUrl: null,
            }
    ]
},
};

export function formVideoReducer(state = initialState, action) {
    switch (action.type) {
        case mainTypes.ADD_VIDEO_INPUT: {
          const { value, params } = action.payload

          return { ...state, videoCard: {...state.videoCard, [params]: value}}
        }

        case mainTypes.ADD_VIDEO_RECORDS_INPUT: {
          const { value, params, index } = action.payload
          console.log(action.payload)

          return { ...state, videoCard: {...state.videoCard, records: [{...state.videoCard.records[index], id: index, [params]: value}]
          }}
        }

        case mainTypes.ADD_EMPTY_VIDEO_BLOCK: {
          const { value } = action.payload
          return { ...state, videoCard: {...state.videoCard, records: [...state.videoCard.records, {id: Date.now(), city:value, videoUrl: value}]}}
        }

        case mainTypes.DELETE_VIDEO_RECORD: {
          const { id } = action.payload
          return { ...state, videoCard: {...state.videoCard, ...state.videoCard.records.filter((el) => el.id !== id)} } 
        }
        
        default: {
          return state;
        }
      }
  }