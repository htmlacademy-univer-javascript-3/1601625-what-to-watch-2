import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import HeaderLogo from '../../header-logo/header-logo';
import SignInField from '../../sign-in-field/sign-in-field';
import SignInError from '../sign-in-error/sign-in-error';
import Footer from '../../footer/footer';
import { AppRoutes, AuthorisationStatus } from '../../../consts';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { loginAction } from '../../../store/api-actions';
import { checkEmail } from '../../../utils/checkEmail/checkEmail';
import { checkPassword } from '../../../utils/checkPassword/checkPassword';
import { getAuthStatus } from '../../../store/user-process/selectors';

function SignIn() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const authorisationStatus = useAppSelector(getAuthStatus);

  useEffect(() => {
    if (authorisationStatus === AuthorisationStatus.Auth){
      navigate(AppRoutes.Main);
    }
  }, [authorisationStatus]);

  const handlerSignInBtnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const isEmailValid = checkEmail(email);
    const isPasswordValid = checkPassword(password);

    if (isEmailValid && isPasswordValid) {
      setIsEmailError(false);
      setIsPasswordError(false);
      dispatch(loginAction({ login: email, password }));

      toast.success('You are logged in!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      });
    } else if (isEmailValid || email === '') {
      setIsEmailError(false);
      setIsPasswordError(true);
    } else if (isPasswordValid || password === '') {
      setIsPasswordError(false);
      setIsEmailError(true);
    } else {
      setIsEmailError(true);
      setIsPasswordError(true);
    }
  };

  const showMessage = () => {
    if (isEmailError && isPasswordError && email !== '' && password !== '') {
      return 'email address and password';
    } else if (isEmailError && email !== '') {
      return 'email address';
    } else if (isPasswordError && password !== '') {
      return 'password';
    } else {
      return '';
    }
  };

  const message = showMessage();

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <HeaderLogo linkLogo={AppRoutes.Main} />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form">
          {message !== '' && <SignInError message={message} />}
          <div className="sign-in__fields">
            <SignInField
              type="email"
              placeholder="Email address"
              name="user-email"
              id="user-email"
              value={email}
              onChangeHandler={setEmail}
              htmlFor="user-email"
              label="Email address"
              errorClass={
                isEmailError && email !== '' ? 'sign-in__field--error' : ''
              }
            />

            <SignInField
              type="password"
              placeholder="Password"
              name="user-password"
              id="user-password"
              value={password}
              onChangeHandler={setPassword}
              htmlFor="user-password"
              label="Password"
              errorClass={
                isPasswordError && password !== ''
                  ? 'sign-in__field--error'
                  : ''
              }
            />
          </div>
          <div className="sign-in__submit">
            <button
              className="sign-in__btn"
              type="submit"
              onClick={(e) => handlerSignInBtnClick(e)}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>

      <Footer linkLogo={AppRoutes.Main} />
    </div>
  );
}

export default SignIn;
