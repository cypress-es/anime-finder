import Cookies from 'js-cookie';

/* --- Misc. constants ----------------------------------------------------- */

export const NOT_VALID_VALUES = [null, undefined, '', []];

export const COOKIE_SESSION_TOKEN = 'session_token';

export enum ROLE {
  ADMIN = 'admin',
  BASIC = 'user',
}
export interface TokenValue {
  email: string,
  platform: string,
}

const options = {};

const validStorageValue = (value: string, cb: CallableFunction) => {
  if (NOT_VALID_VALUES.includes(value)) return;
  cb();
};

const cookieStorage = {
  setItem: (key: string, value: string): void => {
    validStorageValue(value, () => {
      Cookies.set(key, value, options);
    });
  },
  removeItem: (key: string): void => Cookies.remove(key, options),
  getItem: (key: string): string => Cookies.get(key) || '',
  getToken: (): string => {
    return Cookies.get(COOKIE_SESSION_TOKEN) || '';
  },
};

export default cookieStorage;
