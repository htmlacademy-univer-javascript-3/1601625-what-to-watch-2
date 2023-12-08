import { useAppSelector, useAppDispatch } from '../../hooks';
import { logoutAction } from '../../store/api-actions';

function HeaderUserBlock() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.authorisation.user);

  const handlerSignOutLinkClick = () => {
    dispatch(logoutAction());
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
