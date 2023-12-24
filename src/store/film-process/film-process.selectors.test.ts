import { SliceNameSpace } from '../../consts';
import { filmInfo, generateFilmReviewArr, generateSimilarFilmsArray } from '../../utils/mock-data';
import { getFilmInfo, getComments, getSimilarFilms, getLoadingStatus, getError } from './selectors';

describe('FilmProcess selectors', () => {
  const state = {
    [SliceNameSpace.Film]: {
      film: filmInfo(),
      comments: generateFilmReviewArr(5),
      similarFilms: generateSimilarFilmsArray(4),
      isLoading: false,
      error: undefined,
    }
  };

  it('should return film from state', () => {
    const { film } = state[SliceNameSpace.Film];
    expect(getFilmInfo(state)).toEqual(film);
  });

  it('should return comments array from state', () => {
    const { comments } = state[SliceNameSpace.Film];
    expect(getComments(state)).toEqual(comments);
  });

  it('should return similar films from state', () => {
    const { similarFilms } = state[SliceNameSpace.Film];
    expect(getSimilarFilms(state)).toEqual(similarFilms);
  });

  it('should return loading status from state', () => {
    const { isLoading } = state[SliceNameSpace.Film];
    expect(getLoadingStatus(state)).toEqual(isLoading);
  });

  it('should return errors array status from state', () => {
    const { error } = state[SliceNameSpace.Film];
    expect(getError(state)).toEqual(error);
  });
});
