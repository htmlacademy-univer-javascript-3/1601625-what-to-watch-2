import { combineReducers } from '@reduxjs/toolkit';
import { SliceNameSpace } from '../consts';
import { userProcess } from './user-process/user-process';
import { filmProcess } from './film-process/film-process';
import { filmsProcess } from './films-process/films-process';
import { myListProcess } from './my-list-process/my-list-process';

export const rootReducer = combineReducers({
  [SliceNameSpace.User]: userProcess.reducer,
  [SliceNameSpace.Films]: filmsProcess.reducer,
  [SliceNameSpace.Film]: filmProcess.reducer,
  [SliceNameSpace.MyList]: myListProcess.reducer,
});
