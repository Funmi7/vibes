import SpotifyWebApi from "spotify-web-api-js";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import {
  Flex,
  Heading,
  HStack,
  Text,
  Box,
  VStack,
  Img,
} from "@chakra-ui/react";
import ChartCard from "../atoms/ChartCard";
import { setLoggedOff } from "redux/reducers/authorizationSlice";

const spotifyApi = new SpotifyWebApi();

const TopSection = () => {
  const [featuredPlaylist, setFeaturedPlaylist] =
    useState<SpotifyApi.PlaylistObjectSimplified>();

  const [userPlaylists, setUserPlaylists] = useState<
    SpotifyApi.PlaylistObjectSimplified[]
  >([]);
  const [firstPlaylist, setFirstPlayList] = useState("");
  const [featuredTracks, setFeaturedTracks] = useState<
    SpotifyApi.PlaylistTrackObject[]
  >([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const getFeaturedPlaylist = async () => {
      return await spotifyApi.getFeaturedPlaylists().then(
        (data) => {
          setFeaturedPlaylist(data.playlists.items[0]);
          setFirstPlayList(data.playlists.items[0].id);
        },
        (error) => {
          if (error.status === 401) dispatch(setLoggedOff());
          console.log(error);
        }
      );
    };
    getFeaturedPlaylist();
  }, [dispatch]);

  useEffect(() => {
    const getPlaylistTracks = async () => {
      return await spotifyApi.getPlaylistTracks(firstPlaylist).then(
        (data) => {
          setFeaturedTracks(data.items);
          console.log(data);
        },
        (error) => {
          if (error.status === 401) dispatch(setLoggedOff());
          console.log(error);
        }
      );
    };
    getPlaylistTracks();
  }, [dispatch, firstPlaylist]);

  useEffect(() => {
    const getUserPaylists = async () => {
      return await spotifyApi.getUserPlaylists().then(
        (data) => {
          setUserPlaylists(data.items);
        },
        (error) => {
          if (error.status === 401) dispatch(setLoggedOff());
          console.log(error);
        }
      );
    };
    getUserPaylists();
  }, [dispatch]);

  return (
    <Flex justifyContent="space-between" w={{ sm: "100%", "2xl": "100%" }}>
      <HStack
        width="686px"
        height="373px"
        backgroundColor="#609EAF"
        backgroundImage="/img/grey-bg.svg"
        backgroundPosition="right"
        backgroundRepeat="no-repeat"
        borderRadius="40px"
        alignItems="flex-start"
        pl="45px"
      >
        <VStack
          justifyContent="space-between"
          alignItems="flex-start"
          h="50%"
          w="45%"
          pt="38px"
        >
          <Text textStyle="smaller" color="white">
            Editor's pick
          </Text>
          <Heading textStyle="h1">{featuredPlaylist?.name}</Heading>
          <Text textStyle="small" color="white">
            {featuredTracks.slice(0, 5).map((data) => (
              <span>{data.track.name}, </span>
            ))}
            <br /> and so much more
          </Text>
        </VStack>
        <Box>
          <Img src="img/man.png" />
        </Box>
      </HStack>
      <VStack spacing={3} alignItems="flex-start" ml="22px" w="50%">
        <Heading textStyle="h2" mb="14px">
          Your playlists
        </Heading>
        {userPlaylists.slice(0, 3).map((chart) => (
          <ChartCard chart={chart} />
        ))}
      </VStack>
    </Flex>
  );
};

export default TopSection;
