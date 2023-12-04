import { FC } from "react";
import { HStack, Box, Img, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";

import { WhiteHeartIcon } from "design/icons/WhiteHeartIcon";
import { TrackType } from "common/types";
import {
  setCurrentTrack,
  setIsPlaying,
  setTrackIndex,
} from "redux/reducers/audioPlayerSlice";

type TrackItemProps = {
  trackItem: TrackType;
  index: number;
};

const TrackItems: FC<TrackItemProps> = ({ trackItem, index }) => {
  const currentTrack = useSelector(
    (state: RootState) => state.audioPlayer.currentTrack
  );

  const dispatch = useDispatch();

  const handlePlaySongClick = () => {
    dispatch(setIsPlaying(true));
    dispatch(setCurrentTrack(trackItem));
    dispatch(setTrackIndex(index));
  };

  return (
    <HStack
      justifyContent={"space-between"}
      w="100%"
      bg="rgba(51, 55, 59, 0.37)"
      backdropFilter={"blur(5px)"}
      minH="56px"
      borderRadius={"15px"}
      p="8px 32px 9px 10px"
      onClick={handlePlaySongClick}
      cursor="pointer"
      _hover={{ bg: "rgba(51, 55, 59, 0.8)" }}
    >
      <HStack w="10%">
        <Box w="39px" h="39px" mr="20.13px">
          <Img src={trackItem.image} borderRadius="8.53125px" />
        </Box>
        <WhiteHeartIcon w="18px" h="16px" fill="transparent" />
      </HStack>

      <Text
        textStyle="smaller"
        color={
          currentTrack.title === trackItem.title ? "mainSecondary" : "white"
        }
        w="25%"
        textAlign={"start"}
      >
        {trackItem.title}
      </Text>
      <Text
        textStyle="smaller"
        color={
          currentTrack.title === trackItem.title ? "mainSecondary" : "white"
        }
        w="25%"
      >
        {trackItem?.albumName || "Single"}
      </Text>
      <Text
        textStyle="smaller"
        color={
          currentTrack.title === trackItem.title ? "mainSecondary" : "white"
        }
      >
        {trackItem?.duration}
      </Text>
    </HStack>
  );
};

export default TrackItems;
