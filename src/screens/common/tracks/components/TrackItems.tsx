import { FC, useEffect, useState } from "react";
import { HStack, Box, Img, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";

import { WhiteHeartIcon } from "design/icons/WhiteHeartIcon";
import { TrackType } from "common/types";
import { setCurrentTrack, setIsPlaying } from "redux/reducers/audioPlayerSlice";

type TrackItemProps = {
  trackItem: TrackType;
};

const TrackItems: FC<TrackItemProps> = ({ trackItem }) => {
  // const [readableDur, setReadableDur] = useState("");

  // useEffect(() => {
  //   const msToTime = () => {
  //     let minutes = Math.floor(trackItem.duration_ms / 60000);
  //     let seconds = ((trackItem.duration_ms % 60000) / 1000).toFixed(0);

  //     setReadableDur(
  //       `${minutes} : ${Number(seconds) < 10 ? "0" : ""} ${seconds}`
  //     );
  //   };
  //   msToTime();
  // }, [trackItem]);

  const dispatch = useDispatch();

  const handlePlaySongClick = () => {
    dispatch(setIsPlaying(true));
    dispatch(setCurrentTrack(trackItem));
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
    >
      <HStack w="10%">
        <Box w="39px" h="39px" mr="20.13px">
          <Img src={trackItem.image} borderRadius="8.53125px" />
        </Box>
        <WhiteHeartIcon w="18px" h="16px" fill="transparent" />
      </HStack>

      <Text textStyle="smaller" color="white" w="25%" textAlign={"start"}>
        {trackItem.title}
      </Text>
      <Text textStyle="smaller" color="white" w="25%">
        {"Single"}
      </Text>
      {/* <Text textStyle="smaller" color="white">
        {trackItem.duration}
      </Text> */}
    </HStack>
  );
};

export default TrackItems;
