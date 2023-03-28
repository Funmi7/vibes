import Cookies from "js-cookie";

const ACCESS_TOKEN_KEY = "ACCESS_TOKEN";
const EXPIRY_TIME_KEY = "EXPIRY_TIME";

export const getStoredAccessToken = () => {
  return Cookies.get(ACCESS_TOKEN_KEY);
};

export const setStoredAccessToken = (token: string) => {
  Cookies.set(ACCESS_TOKEN_KEY, token);
};

export const removeStoredAccessToken = () => {
  Cookies.remove(ACCESS_TOKEN_KEY);
};

export const getStoredExpiryTime = () => {
  return Cookies.get(EXPIRY_TIME_KEY);
};

export const setStoredExpiryTime = (expiryTime: string) => {
  Cookies.set(ACCESS_TOKEN_KEY, expiryTime);
};

export const removeStoredExpiryTime = () => {
  Cookies.remove(EXPIRY_TIME_KEY);
};
