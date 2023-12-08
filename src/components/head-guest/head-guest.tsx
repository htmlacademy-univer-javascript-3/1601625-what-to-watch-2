import { Link } from 'react-router-dom';
import { AppRoutes } from '../../consts';

function HeadGuest() {
  return (
    <div className="user-block">
      <Link to={AppRoutes.Login} className="user-block__link">
        Sign in
      </Link>
    </div>
  );
}

export default HeadGuest;
