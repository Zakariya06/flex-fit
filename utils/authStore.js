import createStore from 'react-auth-kit/createStore';
import { refresh } from './refreshToken';

const createAuthStore = () => {
  if (typeof window !== 'undefined') {
    return createStore({
      authName: "_auth",
      authType: "cookie",
      refresh: refresh,
      cookieDomain: window.location.hostname,
      cookieSecure: window.location.protocol === "https:",
    });
  }
  return null;
};

export default createAuthStore;
