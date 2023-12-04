import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { greetingReducer } from './reducers/greetingReducer'
import { photoGalleryReducer } from './reducers/photoGalleryReducer'
import { aboutReducer } from './reducers/aboutReducer'
import { mainReducer } from './reducers/mainReducer'
import { videosReducer } from './reducers/videosReducer'
import { helpersReducer } from './reducers/helpersReducer' 
import { countriesForSelectReducer } from './reducers/countriesForSelectReducer'
import { formVideoReducer } from './reducers/formVideoReducer'
import { searchPanelReducer } from './reducers/searchPanelReducer'
import { dataFromSearchPanelReducer } from './reducers/dataFromSearchPanelReducer'

const reducer = combineReducers({
    greetingStore: greetingReducer,
    photoGalleryStore: photoGalleryReducer,
    aboutStore: aboutReducer,
    mainStore: mainReducer,
    videosStore: videosReducer,
    helpersStore: helpersReducer,
    countriesForSelectStore: countriesForSelectReducer,

    formVideoStore: formVideoReducer,
    searchPanelStore: searchPanelReducer,
    dataFromSearchPanelStore: dataFromSearchPanelReducer
});

export const store = configureStore({ reducer });