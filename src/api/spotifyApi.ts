import SpotifyWebApi from "spotify-web-api-js";

const spotifyApi = new SpotifyWebApi();

export const setSpotifyToken = (token: string) =>
  spotifyApi.setAccessToken(token);
