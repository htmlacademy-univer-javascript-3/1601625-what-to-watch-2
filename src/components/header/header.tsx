import HeaderLogo from '../header-logo/header-logo';
import HeaderUserBlock from '../header-user-block/header-user-block';
import { HeaderProps } from '../../types/types';

function Header({linkLogo, children, classes}:HeaderProps){
  return(
    <header className={`page-header ${classes === undefined ? '' : classes}`}>
      <HeaderLogo linkLogo={linkLogo} />
      {children}
      <HeaderUserBlock />
    </header>
  );
}

export default Header;
