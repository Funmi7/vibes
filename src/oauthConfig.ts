export const authEndpoint = "https://accounts.spotify.com/authorize";

export const scopes = [
  "user-read-private",
  "user-top-read",
  "playlist-read-private",
  "playlist-read-collaborative",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-modify-playback-state",
];

export const getAuthorizeHref = (path?: string): string => {
  const clientId = "6f71736dd9ab480797e9f276c6fff91c";
  const redirectUri = `http://localhost:3000/`;
  return `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token`;
};
