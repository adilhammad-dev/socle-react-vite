export interface User {
  name?: string;
  given_name?: string;
  nickname?: string;
  preferred_username?: string;
  email?: string;
  [key: string]: any;
}

export interface RedirectLoginOptions {
  redirectUri?: string;
}

export interface AuthContextProps {
  isAuthenticated: boolean;
  isLoading: boolean;
  user?: User;
  getAccessToken: () => Promise<string>;
  getRawAccessToken?: () => Promise<string>;
  loginWithRedirect: (options?: RedirectLoginOptions) => Promise<void>;
  logout: () => void;
}
