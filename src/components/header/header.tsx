import HeaderLogo from '../header-logo/header-logo';
import HeaderUserBlock from '../header-user-block/header-user-block';
import { PropsHeader } from '../../types/types';

function Header({linkLogo}:PropsHeader){
  return(
    <>
      <div className="film-card__bg">
        <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
      </div>
      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header film-card__head">
        <HeaderLogo linkLogo={linkLogo} />
        <HeaderUserBlock />
      </header>
    </>
  );
}

export default Header;
