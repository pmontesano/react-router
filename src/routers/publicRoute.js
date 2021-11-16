import { Route, Redirect } from 'react-router-dom';
import UseAuth from '../auth/useAuth';

function PublicRoute({ component: Component, isAuthenticated, ...rest }) {
  const auth = UseAuth();

  return (
    <Route {...rest}>
      {!auth.isLogged ? (
        <Component />
      ) : (
        <Redirect
          to={{
            pathname: '/dashboard',
          }}
        />
      )}
    </Route>
  );
}

export default PublicRoute;
