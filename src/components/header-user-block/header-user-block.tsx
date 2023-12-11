import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { AppRoutes } from '../../consts';

function HeaderUserBlock() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.authorisation.user);
  const navigate = useNavigate();

  const handlerSignOutLinkClick = () => {
    dispatch(logoutAction());
    navigate(AppRoutes.Main);
  };

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src={user.avatarUrl} alt="User avatar" width="63" height="63" />
        </div>
      </li>
      <li className="user-block__item">
        <a
          className="user-block__link"
          onClick={handlerSignOutLinkClick}
        >
          Sign out
        </a>
      </li>
    </ul>
  );
}

export default HeaderUserBlock;
