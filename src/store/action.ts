import { createAction } from '@reduxjs/toolkit';
import {
  LoadableComment,
} from '../types/types';
import { AppRoutes } from '../consts';

export const sendComment = createAction<LoadableComment>('film/sendComment');

export const redirectToRoute = createAction<AppRoutes>('redirect/redirectToRoute');

export const setPagePath = createAction<AppRoutes>('redicrect/setPagePath');
