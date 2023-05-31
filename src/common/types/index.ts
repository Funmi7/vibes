export type SongType = {
  title: string;
  src: string;
  author: string;
};

export type ExternalUrlType = {
  spotify: string;
};

export type ImagesUrlType = {
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
  images: ImagesUrlType[];
  name: string;
  owner: OwnerType;
  primary_color: string | null;
  public: string | null;
  snapshot_id: string;
  type: string;
  uri: string;
};

type RestrictionsType = {
  reason: string;
};

type CopyrightsType = {
  text: string;
  type: string;
};
type ExternalIds = {
  isrc: string;
  ean: string;
  upc: string;
};
export type AlbumType = {
  album_type: string;
  total_tracks: string;
  available_markets: string[];
  external_urls: ExternalUrlType;
  href: string;
  id: string;
  images: ImagesUrlType[];
  name: string;
  release_date: string;
  release_date_precision: string;
  restrictions: RestrictionsType;
  type: string;
  uri: string;
  copyrights: CopyrightsType;
  external_ids: ExternalIds;
  genres: string[];
  label: string;
  popularity: number;
  album_group: string;
};

export type FollowersType = {
  href: string;
  total: 0;
};
export type AddedByType = {
  external_urls: ExternalUrlType;
};

export type TrackItemType = {
  added_at: string;
  added_by: AddedByType;
  followers: FollowersType;
  href: string;
  id: string;
  type: string;
  uri: string;
};

// [
//   {
//     added_at: "string",
//     added_by: {
//       external_urls: {
//         spotify: "string",
//       },
//       followers: {
//         href: "string",
//         total: 0,
//       },
//       href: "string",
//       id: "string",
//       type: "user",
//       uri: "string",
//     },
//     is_local: false,
//     track: {
//       album: {
//         album_type: "compilation",
//         total_tracks: 9,
//         available_markets: ["CA", "BR", "IT"],
//         external_urls: {
//           spotify: "string",
//         },
//         href: "string",
//         id: "2up3OPMp9Tb4dAKM2erWXQ",
//         images: [
//           {
//             url: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
//             height: 300,
//             width: 300,
//           },
//         ],
//         name: "string",
//         release_date: "1981-12",
//         release_date_precision: "year",
//         restrictions: {
//           reason: "market",
//         },
//         type: "album",
//         uri: "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
//         copyrights: [
//           {
//             text: "string",
//             type: "string",
//           },
//         ],
//         external_ids: {
//           isrc: "string",
//           ean: "string",
//           upc: "string",
//         },
//         genres: ["Egg punk", "Noise rock"],
//         label: "string",
//         popularity: 0,
//         album_group: "compilation",
//         artists: [
//           {
//             external_urls: {
//               spotify: "string",
//             },
//             href: "string",
//             id: "string",
//             name: "string",
//             type: "artist",
//             uri: "string",
//           },
//         ],
//       },
//       artists: [
//         {
//           external_urls: {
//             spotify: "string",
//           },
//           followers: {
//             href: "string",
//             total: 0,
//           },
//           genres: ["Prog rock", "Grunge"],
//           href: "string",
//           id: "string",
//           images: [
//             {
//               url: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
//               height: 300,
//               width: 300,
//             },
//           ],
//           name: "string",
//           popularity: 0,
//           type: "artist",
//           uri: "string",
//         },
//       ],
//       available_markets: ["string"],
//       disc_number: 0,
//       duration_ms: 0,
//       explicit: false,
//       external_ids: {
//         isrc: "string",
//         ean: "string",
//         upc: "string",
//       },
//       external_urls: {
//         spotify: "string",
//       },
//       href: "string",
//       id: "string",
//       is_playable: false,
//       linked_from: {},
//       restrictions: {
//         reason: "string",
//       },
//       name: "string",
//       popularity: 0,
//       preview_url: "string",
//       track_number: 0,
//       type: "track",
//       uri: "string",
//       is_local: false,
//     },
//   },
// ];
