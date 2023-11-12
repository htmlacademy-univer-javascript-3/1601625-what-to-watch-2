import { PosterProps } from '../../types/types';

function Poster({path}:PosterProps){
  return (
    <div className="film-card__poster">
      <img src={path} alt="The Grand Budapest Hotel poster" width="218" height="327" />
    </div>
  );
}

export default Poster;
