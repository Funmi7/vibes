export type SongType = {
  title: string;
  src: string;
  author: string;
};

export type PlaylistType = {
  id: string;
  name: string;
  author: string;
  image: string;
  songs: PlaylistSongType[] | null;
};

export type PlaylistSongType = {
  title: string;
};

export type SinglePlaylistType = {
  id: string;
  description: string;
  name: string;
  tracks: TrackType[];
};

export type TrackType = {
  artiste: string;
  duration: string;
  image: string;
  title: string;
  trackData: string;
};
