import { Box, Flex, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { useDispatch } from "react-redux";

import SongCard from "../atoms/SongCard";
import { setLoggedOff } from "redux/reducers/authorizationSlice";

const spotifyApi = new SpotifyWebApi();

const MiddleSection = () => {
  const [newReleases, setNewReleases] = useState<
    SpotifyApi.AlbumObjectSimplified[]
  >([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getNewReleases = async () => {
      return await spotifyApi.getNewReleases().then(
        (data) => {
          setNewReleases(data.albums.items);
        },
        (error) => {
          if (error.status === 401) dispatch(setLoggedOff());
          console.log(error);
        }
      );
    };
    getNewReleases();
  }, [dispatch]);
  return (
    <Box mt="43px" w="full">
      <Heading textStyle="h2">New releases.</Heading>
      <Flex mt="13px" w="full" flexWrap="wrap">
        {newReleases.slice(0, 16).map(({ images, name, id }) => (
          <SongCard image={images[1].url} title={name} id={id} />
        ))}
      </Flex>
    </Box>
  );
};

export default MiddleSection;
