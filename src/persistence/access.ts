import cookieStorage, { COOKIE_SESSION_TOKEN } from '.';

/**
 *  Store cookies with information on currently connected user data.
 *
 * @param {object} jwt - Object with connected user data.
 */
const setAccess = (jwt : string): void => {
  cookieStorage.setItem(`${COOKIE_SESSION_TOKEN}`, jwt);
};

/**
 *  Clear current user session data from cookies.
 */
const clearCookiesLogout = (): void => {
  cookieStorage.removeItem(`${COOKIE_SESSION_TOKEN}`);
};

export {
  setAccess,
  clearCookiesLogout,
};
