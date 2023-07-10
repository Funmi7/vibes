import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Flex,
  Heading,
  HStack,
  Text,
  Box,
  VStack,
  Img,
} from "@chakra-ui/react";
import { getDocs, collection } from "firebase/firestore";

import { auth, db } from "../../../firebaseConfig";
import ChartCard from "../atoms/ChartCard";
import { PlaylistType } from "common/types";

const TopSection = () => {
  const [playlists, setPlaylists] = useState<PlaylistType[]>([]);

  const playlistsCollectionRef = useMemo(() => collection(db, "playlists"), []);

  const navigate = useNavigate();

  useEffect(() => {
    const getPlaylists = async () => {
      const data = await getDocs(playlistsCollectionRef);
      setPlaylists(
        data.docs.map((doc) => ({
          name: doc.data().name,
          author: doc.data().author,
          image: doc.data().image,
          songs: doc.data().songs,
          id: doc.id,
        }))
      );
    };

    getPlaylists();
  }, [playlistsCollectionRef]);

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
          <Heading
            textStyle="h1"
            // onClick={() => navigate(`/${featuredPlaylist?.id}`)}
            cursor="pointer"
          >
            {playlists[2]?.name}
          </Heading>
          <Text textStyle="small" color="white">
            {playlists[2]?.songs?.map((data, index) => (
              <span key={`playlist-preview-${index}`}>{data.title}, </span>
            ))}
            <br /> and so much more
          </Text>
        </VStack>
        <Box height="100%">
          <Img src={playlists[2]?.image} />
        </Box>
      </HStack>
      <VStack spacing={3} alignItems="flex-start" ml="22px" w="50%">
        <Heading textStyle="h2" mb="14px">
          Your playlists
        </Heading>
        {playlists.slice(0, 3).map((chart, index) => (
          <ChartCard key={`chart-card-${index}`} chart={chart} />
        ))}
      </VStack>
    </Flex>
  );
};

export default TopSection;
