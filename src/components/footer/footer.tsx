import { Link } from 'react-router-dom';
import { PropsFooter } from '../../types/types';

function Footer({linkLogo}:PropsFooter) {
  return (
    <footer className="page-footer">
      <div className="logo" data-testid='logo'>
        <Link to={linkLogo} className="logo__link logo__link--light">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}

export default Footer;
