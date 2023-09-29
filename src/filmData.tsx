export type FilmCardProps = {
  filmTitle: string;
  img: string;
}

export const filmInfo: FilmCardProps[] = [
  {
    filmTitle: 'Fantastic Beasts: The Crimes of Grindelwald',
    img: 'fantastic-beasts-the-crimes-of-grindelwald.jpg'
  },
  {
    filmTitle: 'Bohemian Rhapsody',
    img: 'bohemian-rhapsody.jpg'
  },
  {
    filmTitle: 'Macbeth',
    img: 'macbeth.jpg'
  },
  {
    filmTitle: 'Aviator',
    img: 'aviator.jpg'
  },
  {
    filmTitle: 'We need to talk about Kevin',
    img: 'we-need-to-talk-about-kevin.jpg'
  },
  {
    filmTitle: 'What We Do in the Shadows',
    img: 'what-we-do-in-the-shadows.jpg'
  },
  {
    filmTitle: 'Revenant',
    img: 'revenant.jpg'
  },
  {
    filmTitle: 'Johnny English',
    img: 'johnny-english.jpg'
  },
  {
    filmTitle: 'Shutter Island',
    img: 'shutter-island.jpg'
  },
  {
    filmTitle: 'Pulp Fiction',
    img: 'pulp-fiction.jpg'
  },
  {
    filmTitle: 'No Country for Old Men',
    img: 'no-country-for-old-men.jpg'
  },
  {
    filmTitle: 'Snatc',
    img: 'snatch.jpg'
  },
];

export type MainPageProps = {
  title: string;
  genre: string;
  date: string | number;
};

export const promoFilmData: MainPageProps = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  date: '2014',
};