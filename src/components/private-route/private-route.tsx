import {Navigate} from 'react-router-dom';
import { PrivateRouteProps } from '../../types/types';
import { AppRoutes, AuthorisationStatus } from '../../consts';

function PrivateRoute({authorizationStatus, children}: PrivateRouteProps) {
  return (
    authorizationStatus === AuthorisationStatus.Auth ? children : <Navigate to={AppRoutes.Login}/>
  );
}

export default PrivateRoute;
