import { Link } from 'react-router-dom';
import { PropsHeader } from '../../types/types';

function HeaderLogo({linkLogo}:PropsHeader){
  return(
    <div className="logo">
      <Link to={linkLogo} className="logo__link">
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

export default HeaderLogo;
