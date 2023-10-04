import {Navigate} from 'react-router-dom';
import { AppRoutes, AuthorisationStatus } from '../../consts';

type PrivateRouteProps = {
  authorizationStatus: AuthorisationStatus;
  children: JSX.Element;
}

function PrivateRoute({authorizationStatus, children}: PrivateRouteProps) {
  return (
    authorizationStatus === AuthorisationStatus.Auth ? children : <Navigate to={AppRoutes.Login}/>
  );
}

export default PrivateRoute;
