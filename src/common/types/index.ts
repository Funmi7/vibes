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
  songs: string[];
};

export type SinglePlaylistType = {
  id: string;
  description: string;
  name: string;
  tracks: TrackType[];
};

export type TrackType = {
  artiste: string;
  image: string;
  title: string;
  trackData: string;
  albumName: string | null;
  duration: string;
};

export type AlbumType = {
  artiste: string;
  image: string;
  name: string;
  id: string;
};

export type SingleAlbumType = {
  id: string;
  name: string;
  tracks: TrackType[];
};
