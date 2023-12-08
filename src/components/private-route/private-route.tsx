import {Navigate} from 'react-router-dom';
import { PrivateRouteProps } from '../../types/types';
import { AppRoutes, AuthorisationStatus } from '../../consts';
import { useAppSelector } from '../../hooks';

function PrivateRoute({children}: PrivateRouteProps) {
  const authorizationStatus = useAppSelector((state) => state.authorisation.authorisationStatus);

  return (
    authorizationStatus === AuthorisationStatus.Auth ? children : <Navigate to={AppRoutes.Login}/>
  );
}

export default PrivateRoute;
