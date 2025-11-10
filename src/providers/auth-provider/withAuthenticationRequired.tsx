import { type ComponentType, type FC, useEffect } from 'react';
import { type Location, useLocation } from 'react-router-dom';
import { setAuthInfo } from 'services/slices/auth';
import { useDispatch } from 'react-redux';
import { useCustomAuth } from './AuthContext';

const defaultOnRedirecting = (): JSX.Element => <div>Loading...</div>;

export interface WithAuthenticationRequiredOptions {
  onRedirecting?: () => JSX.Element;
}
const defaultReturnTo = (location: Location): string =>
  `${location.pathname}${location.search}`;

export const ProtectedComponent: FC<{ element: ComponentType }> = function ({ element }) {
  const ProtectedElement = withAuthenticationRequired(element);
  return <ProtectedElement />;
};

const withAuthenticationRequired = <P extends object>(
  Component: ComponentType<P>,
  options: WithAuthenticationRequiredOptions = {},
): FC<P> => {
  return function WithAuthenticationRequired(props: P): JSX.Element {
    const { onRedirecting = defaultOnRedirecting } = options;
    const { isAuthenticated, isLoading, loginWithRedirect, user } = useCustomAuth();
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
      if (isAuthenticated) {
        dispatch(setAuthInfo({ isAuthenticated, user }));
        return;
      }
      if (isLoading) return;
      const opts = {
        redirectUri: defaultReturnTo(location),
      };
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      (async (): Promise<void> => {
        await loginWithRedirect(opts);
      })();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading, isAuthenticated, loginWithRedirect, user]);

    return isAuthenticated ? <Component {...props} /> : onRedirecting();
  };
};

export default withAuthenticationRequired;
