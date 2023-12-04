import { useMemo } from "react";
import { VStack } from "@chakra-ui/react";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getDocs, collection } from "firebase/firestore";

import MainLayout from "layouts/MainLayout";
import { useEffect, useState } from "react";
import TopSection from "./components/TopSection";
import TrackItems from "./components/TrackItems";
import { db } from "../../../firebaseConfig";
import { SingleAlbumType, SinglePlaylistType } from "common/types";
import { setSongsList } from "redux/reducers/audioPlayerSlice";

const TracksList = () => {
  const [singlePlaylist, setSinglePlaylist] = useState<SinglePlaylistType[]>(
    []
  );
  const [singleAlbum, setSingleAlbum] = useState<SingleAlbumType[]>([]);

  const dispatch = useDispatch();
  const { id } = useParams();
  const location = useLocation();

  const isAlbum = location.state.isAlbum;

  const playlistImage = location.state.image;

  const singlePlaylistCollectionRef = useMemo(
    () => collection(db, "playlists", `${id}`, "singlePlaylist"),
    [id]
  );

  const singleAlbumRef = useMemo(
    () => collection(db, "albums", `${id}`, "singleAlbum"),
    [id]
  );

  useEffect(() => {
    if (isAlbum) {
      const getAlbumTracks = async () => {
        const data = await getDocs(singleAlbumRef);
        setSingleAlbum(
          data.docs.map((doc) => ({
            name: doc.data().name,
            tracks: doc.data().tracks,
            id: doc.id,
          }))
        );
      };
      getAlbumTracks();
    } else {
      const getPlaylistTracks = async () => {
        const data = await getDocs(singlePlaylistCollectionRef);
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
    }
  }, [singlePlaylistCollectionRef, isAlbum, singleAlbumRef]);

  useEffect(() => {
    if (isAlbum) {
      dispatch(setSongsList(singleAlbum[0]?.tracks));
    } else {
      dispatch(setSongsList(singlePlaylist[0]?.tracks));
    }
  }, [dispatch, singlePlaylist, isAlbum, singleAlbum]);

  return (
    <MainLayout>
      <VStack>
        <TopSection
          name={singlePlaylist[0]?.name}
          description={singlePlaylist[0]?.description}
          image={playlistImage}
          totalTracks={singlePlaylist[0]?.tracks.length}
        />
        <VStack pt="49.03px" w="full" spacing={"10px"}>
          {isAlbum
            ? singleAlbum[0]?.tracks.map((track, index) => (
                <TrackItems
                  key={`track-${index}`}
                  trackItem={track}
                  index={index}
                />
              ))
            : singlePlaylist[0]?.tracks.map((track, index) => (
                <TrackItems
                  key={`track-${index}`}
                  trackItem={track}
                  index={index}
                />
              ))}
        </VStack>
      </VStack>
    </MainLayout>
  );
};

export default TracksList;
