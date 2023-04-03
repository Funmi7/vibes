import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getHashParams, removeHashParamsFromUrl } from "utils/hash";
import {
  getStoredAccessToken,
  getStoredExpiryTime,
  removeStoredAccessToken,
  removeStoredExpiryTime,
  setStoredAccessToken,
  setStoredExpiryTime,
} from "utils/cookiesUtil";
import { setSpotifyToken } from "api/spotifyApi";
import { getAuthorizeHref } from "oauthConfig";
import { setLoggedOff } from "redux/reducers/authorizationSlice";

const TEN_MINUTES = 600000; // In Milliseconds
const unixTimeNow = new Date().getTime(); // Unix time in milliseconds

const hashParams = getHashParams();
const freshToken = hashParams.access_token;
const expiresIn = hashParams.expires_in; // Seconds
const expiryTime = unixTimeNow + Number(expiresIn) * 1000;

const storedToken = getStoredAccessToken();

if (freshToken) {
  setStoredAccessToken(freshToken);
  setStoredExpiryTime(String(expiryTime));
  setSpotifyToken(freshToken);
  removeHashParamsFromUrl();
} else if (storedToken) {
  setSpotifyToken(storedToken);
}

console.log(freshToken);

const WithSpotifyTokenRoute = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (getStoredAccessToken()) {
      const storedExpiryTime = getStoredExpiryTime();
      if (storedExpiryTime) {
        const unixTimeExpiry = Number(storedExpiryTime);
        if (unixTimeNow > unixTimeExpiry) {
          dispatch(setLoggedOff());
        } else if (unixTimeNow > unixTimeExpiry - TEN_MINUTES) {
          removeStoredAccessToken();
          removeStoredExpiryTime();
          window.open(getAuthorizeHref(), "_self");
        }
      }
    } else if (!freshToken) dispatch(setLoggedOff());
  }, [dispatch]);
  return <Outlet />;
};

export default WithSpotifyTokenRoute;
