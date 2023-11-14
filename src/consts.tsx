export enum AppRoutes {
  Main ='/',
  Login = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
}

export enum AuthorisationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const VIDEO_TIMEOUT = 1000;
export const TABS = ['Overview', 'Details', 'Reviews'];
