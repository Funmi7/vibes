import React, { useEffect, useContext } from "react";
import { Outlet } from "react-router-dom";

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
import { UserContext } from "common/context/UserContext";
import { getAuthorizeHref } from "oauthConfig";

const TEN_MINUTES = 600000; // In Milliseconds
const unixTimeNow = new Date().getTime(); // Unix time in milliseconds

const hashParams = getHashParams();
const freshToken = hashParams.acccess_token;
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

const WithSpotifyTokenRoute = () => {
  const { funcs } = useContext(UserContext);

  const { handleLoggedOff } = funcs;

  useEffect(() => {
    if (getStoredAccessToken()) {
      const storedExpiryTime = getStoredExpiryTime();
      if (storedExpiryTime) {
        const unixTimeExpiry = Number(storedExpiryTime);
        if (unixTimeNow > unixTimeExpiry) {
          handleLoggedOff();
        } else if (unixTimeNow > unixTimeExpiry - TEN_MINUTES) {
          removeStoredAccessToken();
          removeStoredExpiryTime();
          window.open(getAuthorizeHref(), "_self");
        }
      }
    } else if (!freshToken) handleLoggedOff();
  }, [handleLoggedOff]);
  return <Outlet />;
};

export default WithSpotifyTokenRoute;
