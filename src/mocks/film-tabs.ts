import { FilmCardOverview, FilmCardDetails } from '../types/types';

export const TAB_OVERVIEW_INFO:FilmCardOverview = {
  rating: {
    score: 8.9,
    level: 'Very good',
    count: '240 ratings'
  },
  text: {
    paragraphs: [
      'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
      'Gustave prides himself on providing service to the hotel\'s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.'
    ],
    director: 'Wes Anderson',
    starring: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other'
  }
};

export const TAB_DETAILS_INFO:FilmCardDetails = {
  director: 'Wes Anderson',
  starring: [
    'Bill Murray',
    'Edward Norton',
    'Jude Law',
    'Willem Dafoe',
    'Saoirse Ronan',
    'Tony Revoloru',
    'Tilda Swinton',
    'Tom Wilkinson',
    'Owen Wilkinson',
    'Adrien Brody',
    'Ralph Fiennes',
    'Jeff Goldblum'
  ],
  runTime: '1h 39m',
  genre: 'Comedy',
  realeased: '2014'
};


