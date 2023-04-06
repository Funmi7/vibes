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
  const [featuredPlaylist, setFeaturedPlaylist] = useState<
    SpotifyApi.PlaylistObjectSimplified[]
  >([]);
  const [userPlaylists, setUserPlaylists] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const getFeaturedPlaylist = async () => {
      return await spotifyApi.getFeaturedPlaylists().then(
        (data) => {
          setFeaturedPlaylist(data.playlists.items);
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
    const getUserPlaylists = async () => {
      return await spotifyApi.getUserPlaylists().then(() => {});
    };
  });

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
            Currated playlist
          </Text>
          <Heading textStyle="h1">R & B Hits</Heading>
          <Text textStyle="small" color="white">
            All mine, Lie again, Petty call me everyday, Out of time, No love,
            Bad habit,
            <br /> and so much more
          </Text>
        </VStack>
        <Box>
          <Img src="img/man.png" />
        </Box>
      </HStack>
      <VStack spacing={3} alignItems="flex-start" ml="22px" w="50%">
        <Heading textStyle="h2" mb="14px">
          Editor's pick
        </Heading>
        {featuredPlaylist.slice(0, 3).map((chart) => (
          <ChartCard chart={chart} />
        ))}
      </VStack>
    </Flex>
  );
};

export default TopSection;
