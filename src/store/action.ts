import { createAction } from '@reduxjs/toolkit';
import { AppRoutes } from '../consts';

export const redirectToRoute = createAction<AppRoutes>('redirect/redirectToRoute');

