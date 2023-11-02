import { PropsPoster } from '../../types/types';

function Poster({path}:PropsPoster){
  return (
    <div className="film-card__poster">
      <img src={path} alt="The Grand Budapest Hotel poster" width="218" height="327" />
    </div>
  );
}

export default Poster;
