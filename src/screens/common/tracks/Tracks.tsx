import { VStack } from "@chakra-ui/react";
import SpotifyWebApi from "spotify-web-api-js";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import MainLayout from "layouts/MainLayout";
import { useEffect, useState } from "react";
import TopSection from "./components/TopSection";
import TrackItems from "./components/TrackItems";
import { setLoggedOff } from "redux/reducers/authorizationSlice";
import AlbumTrackItem from "./components/AlbumTrackItem";

const spotifyApi = new SpotifyWebApi();

const TracksList = () => {
  const [playlistDetails, setPlaylistDetails] =
    useState<SpotifyApi.SinglePlaylistResponse>();
  const [albumDetails, setAlbumDetails] =
    useState<SpotifyApi.AlbumObjectFull>();

  const dispatch = useDispatch();
  const { id } = useParams();
  const location = useLocation();

  const isAlbum = location.state.isAlbum;

  useEffect(() => {
    if (location.state.isAlbum) {
      const getAlbum = async () => {
        return await spotifyApi.getAlbum(String(id)).then(
          (data) => {
            setAlbumDetails(data);
          },
          (error) => {
            if (error.status === 401) dispatch(setLoggedOff());
            console.log(error);
          }
        );
      };
      getAlbum();
    } else {
      const getPlaylistTracks = async () => {
        return await spotifyApi.getPlaylist(String(id)).then(
          (data) => {
            setPlaylistDetails(data);
          },
          (error) => {
            if (error.status === 401) dispatch(setLoggedOff());
            console.log(error);
          }
        );
      };
      getPlaylistTracks();
    }
  }, [dispatch, id, location]);
  return (
    <MainLayout>
      <VStack w="full">
        <TopSection
          name={isAlbum ? albumDetails?.name : playlistDetails?.name}
          description={isAlbum ? "" : playlistDetails?.description}
          image={
            isAlbum
              ? albumDetails?.images[0]?.url
              : playlistDetails?.images[0]?.url
          }
          totalTracks={isAlbum ? albumDetails?.tracks?.total : ""}
        />
        <VStack pt="49.03px" w="full" spacing={"10px"}>
          {isAlbum
            ? albumDetails?.tracks?.items.map((track) => (
                <AlbumTrackItem
                  trackItem={track}
                  image={albumDetails?.images[0]?.url}
                  albumName={albumDetails?.name}
                />
              ))
            : playlistDetails?.tracks?.items.map(
                (track: SpotifyApi.PlaylistTrackObject) => (
                  <TrackItems
                    trackItem={track.track as SpotifyApi.TrackObjectFull}
                  />
                )
              )}
        </VStack>
      </VStack>
    </MainLayout>
  );
};

export default TracksList;
