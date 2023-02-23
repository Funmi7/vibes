import {
  HStack,
  Img,
  Text,
  Box,
  Flex,
  VStack,
  IconButton,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
import { PlayIcon } from "design/icons/PlayIcon";
import { RepeatSongIcon } from "design/icons/RepeatSongIcon";
import { ShuffleIcon } from "design/icons/ShuffleIcon";
import { SongBackIcon } from "design/icons/SongBackIcon";
import { SongForwardIcon } from "design/icons/SongForwardIcon";
import { VolumeIcon } from "design/icons/VolumeIcon";

const AudioPlayer = () => {
  return (
    <HStack
      w="100%"
      height="125px"
      filter="drop-shadow(0px -25px 100px rgba(16, 16, 16, 0.51))"
      background="rgba(29, 33, 35, 0.3)"
      border="1px solid rgba(255, 255, 255, 0.1)"
      backdrop-filter="blur(15px)"
      pl="101px"
      pt="20px"
      position="fixed"
      bottom="0px"
      justifyContent="space-between"
      pr="66px"
    >
      <Flex>
        <Img src="/img/audioImages/song-image.svg" alt="song art cover" />
        <Box mt="2px" ml="13px">
          <Text textStyle="h4" color="white">
            Seasons in
          </Text>
          <Text textStyle="smallest" color="gray.500" mt="3px">
            James
          </Text>
        </Box>
      </Flex>
      <VStack w="70%">
        <HStack>
          <ShuffleIcon fill="white" w="16px" h="16px" />
          <IconButton
            aria-label="previous song"
            icon={<SongBackIcon />}
            bg="transparent"
            pl="45px"
            pr="44.51px"
            _hover={{
              bg: "transparent",
            }}
          />
          <Flex
            as="button"
            width="25px"
            height="25.5px"
            background=" #FACD66"
            Flex-shadow="0px 0px 18px #ffffff4c"
            borderRadius="50%"
            justifyContent="center"
            alignItems="center"
          >
            <PlayIcon w="8.33px" h="8.88px" />
          </Flex>
          <IconButton
            aria-label="next song"
            icon={<SongForwardIcon />}
            bg="transparent"
            pl="44.51px"
            _hover={{
              bg: "transparent",
            }}
          />
          <IconButton
            aria-label="repeat song"
            icon={<RepeatSongIcon />}
            bg="transparent"
            pl="50.67px"
            _hover={{
              bg: "transparent",
            }}
          />
        </HStack>
        <Box pt="9.73px" w="full">
          <Slider colorScheme="yellow" defaultValue={30} h="4px">
            <SliderTrack bg="rgba(255, 255, 255, 0.04)">
              <SliderFilledTrack bg="mainSecondary" />
            </SliderTrack>
            <SliderThumb boxSize={3} />
          </Slider>
        </Box>
      </VStack>
      <HStack>
        <VolumeIcon />
        <Box w="160px" pt="1">
          <Slider colorScheme="yellow" defaultValue={30}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Box>
      </HStack>
    </HStack>
  );
};

export default AudioPlayer;
