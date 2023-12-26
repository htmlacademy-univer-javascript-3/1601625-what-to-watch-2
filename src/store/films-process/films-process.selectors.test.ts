import { SliceNameSpace, GenresEnum } from '../../consts';
import { generateFilmsArray, promoFilmInfo } from '../../utils/mock-data';
import { getGenre, getFilmsInfo, getLoadingStatus, getPromoFilm } from './selectors';

describe('FilmsProcess selectors', () => {
  const state = {
    [SliceNameSpace.Films]: {
      genre: GenresEnum.AllGenres,
      films: generateFilmsArray(21),
      isLoading: false,
      promoFilm: promoFilmInfo(),
    }
  };

  it('should return genre from state', () => {
    const { genre } = state[SliceNameSpace.Films];
    expect(getGenre(state)).toEqual(genre);
  });

  it('should return films array from state', () => {
    const { films } = state[SliceNameSpace.Films];
    expect(getFilmsInfo(state)).toEqual(films);
  });

  it('should return loading status from state', () => {
    const { isLoading } = state[SliceNameSpace.Films];
    expect(getLoadingStatus(state)).toEqual(isLoading);
  });

  it('should return promo film from state', () => {
    const { promoFilm } = state[SliceNameSpace.Films];
    expect(getPromoFilm(state)).toEqual(promoFilm);
  });
});
