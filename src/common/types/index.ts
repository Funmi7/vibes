export type SongType = {
  title: string;
  src: string;
  author: string;
};

export type ExternalUrlType = {
  spotify: string;
};

export type ImagesUrl = {
  height: string | null;
  url: string;
  width: string | null;
};

export type OwnerType = {
  display_name: string;
  external_urls: ExternalUrlType;
  href: string;
  id: string;
  type: string;
  uri: string;
};

export type TracksUrlType = {
  href: string;
  total: number;
};

export type FeaturedPlaylistType = {
  collaborative: boolean;
  description: string;
  external_urls: ExternalUrlType;
  href: string;
  id: string;
  images: ImagesUrl[];
  name: string;
  owner: OwnerType;
  primary_color: string | null;
  public: string | null;
  snapshot_id: string;
  type: string;
  uri: string;
};
