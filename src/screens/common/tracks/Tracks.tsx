import { useMemo } from "react";
import { VStack } from "@chakra-ui/react";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDocs, collection } from "firebase/firestore";
import { RootState } from "redux/store";

import MainLayout from "layouts/MainLayout";
import { useEffect, useState } from "react";
import TopSection from "./components/TopSection";
import TrackItems from "./components/TrackItems";
import { setLoggedOff } from "redux/reducers/authorizationSlice";
import AlbumTrackItem from "./components/AlbumTrackItem";
import { db } from "../../../firebaseConfig";
import { SinglePlaylistType } from "common/types";
import { setSongsList } from "redux/reducers/audioPlayerSlice";

// const spotifyApi = new SpotifyWebApi();

const TracksList = () => {
  // const [playlistDetails, setPlaylistDetails] =
  //   useState<SpotifyApi.SinglePlaylistResponse>();
  // const [albumDetails, setAlbumDetails] =
  //   useState<SpotifyApi.AlbumObjectFull>();

  const dispatch = useDispatch();

  const [singlePlaylist, setSinglePlaylist] = useState<SinglePlaylistType[]>(
    []
  );
  const { id } = useParams();
  const location = useLocation();

  // const isAlbum = location.state.isAlbum;

  const playlistImage = location.state.image;

  // useEffect(() => {
  //   if (location.state.isAlbum) {
  //     const getAlbum = async () => {
  //       return await spotifyApi.getAlbum(String(id)).then(
  //         (data) => {
  //           setAlbumDetails(data);
  //         },
  //         (error) => {
  //           if (error.status === 401) dispatch(setLoggedOff());
  //           console.log(error);
  //         }
  //       );
  //     };
  //     getAlbum();
  //   } else {
  //     const getPlaylistTracks = async () => {
  //       return await spotifyApi.getPlaylist(String(id)).then(
  //         (data) => {
  //           setPlaylistDetails(data);
  //         },
  //         (error) => {
  //           if (error.status === 401) dispatch(setLoggedOff());
  //           console.log(error);
  //         }
  //       );
  //     };
  //     getPlaylistTracks();
  //   }
  // }, [dispatch, id, location]);

  const singlePlaylistCollectionRef = useMemo(
    () => collection(db, "playlists", `${id}`, "singlePlaylist"),
    [id]
  );

  useEffect(() => {
    const getPlaylistTracks = async () => {
      const data = await getDocs(singlePlaylistCollectionRef);
      // setSinglePlaylist(data.docs.map((doc) => ({})))
      setSinglePlaylist(
        data.docs.map((doc) => ({
          artiste: doc.data().artiste,
          description: doc.data().description,
          name: doc.data().name,
          tracks: doc.data().tracks,
          duration: doc.data().duration,
          id: doc.id,
        }))
      );
    };
    getPlaylistTracks();
  }, [singlePlaylistCollectionRef]);

  useEffect(() => {
    dispatch(setSongsList(singlePlaylist[0]?.tracks));
  });
  return (
    <MainLayout>
      {/* <VStack w="full">
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
      </VStack> */}
      <VStack>
        <TopSection
          name={singlePlaylist[0]?.name}
          description={singlePlaylist[0]?.description}
          image={playlistImage}
          totalTracks={singlePlaylist[0]?.tracks.length}
        />
        <VStack pt="49.03px" w="full" spacing={"10px"}>
          {singlePlaylist[0]?.tracks.map((track, index) => (
            <TrackItems key={`track-${index}`} trackItem={track} />
          ))}
        </VStack>
      </VStack>
    </MainLayout>
  );
};

export default TracksList;
