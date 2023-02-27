import { useState, useRef, useCallback, useEffect } from "react";
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
import {
  BsFillPauseFill,
  BsFillVolumeMuteFill,
  BsVolumeDownFill,
  BsFillVolumeUpFill,
} from "react-icons/bs";

import { PlayIcon } from "design/icons/PlayIcon";
import { RepeatSongIcon } from "design/icons/RepeatSongIcon";
import { ShuffleIcon } from "design/icons/ShuffleIcon";
import { SongBackIcon } from "design/icons/SongBackIcon";
import { SongForwardIcon } from "design/icons/SongForwardIcon";
import { songs } from "common/dummydata/Tracks";
import { SongType } from "common/types";

const AudioPlayer = () => {
  const [trackIndex, setTrackIndex] = useState<number>(0);
  const [currentTrack, setCurrentTrack] = useState<SongType>(songs[0]);
  const [timeProgress, setTimeProgress] = useState<number | undefined>(0);
  const [duration, setDuration] = useState<number | undefined>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(60);
  const [muteVolume, setMuteVolume] = useState<boolean>(false);
  const [updateValue, setUpdateValue] = useState<number>(0);

  const audioRef = useRef<HTMLAudioElement>(null);
  const progressBarRef = useRef<HTMLInputElement>(null);

  const onLoadedMetadata = () => {
    const seconds = audioRef?.current?.duration;
    setDuration(seconds);
    if (progressBarRef && progressBarRef.current) {
      progressBarRef.current.max = String(seconds);
    }
  };

  const handleNext = () => {
    if (trackIndex >= songs.length - 1) {
      setTrackIndex(0);
      setCurrentTrack(songs[0]);
    } else {
      setTrackIndex((prev) => prev + 1);
      setCurrentTrack(songs[trackIndex + 1]);
    }
  };
  const handlePrevious = () => {
    if (trackIndex === 0) {
      let lastTrackIndex = songs.length - 1;
      setTrackIndex(lastTrackIndex);
      setCurrentTrack(songs[lastTrackIndex]);
    } else {
      setTrackIndex((prev) => prev - 1);
      setCurrentTrack(songs[trackIndex - 1]);
    }
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const playAnimationRef = useRef<number>();

  const repeat = useCallback(() => {
    const currentTime = audioRef?.current?.currentTime;
    setTimeProgress(currentTime);
    if (progressBarRef.current) {
      progressBarRef.current.value = String(currentTime);
      setUpdateValue(Number(progressBarRef.current.value));
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audioRef, duration, progressBarRef, setTimeProgress]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
      audioRef.current.muted = muteVolume;
    }
  }, [volume, audioRef, muteVolume]);

  const handleProgressChange = (val: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = val;
    }
  };

  const formatTime = (time: number | undefined) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return "00:00";
  };

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
            {currentTrack.title}
          </Text>
          <Text textStyle="smallest" color="gray.500" mt="3px">
            {currentTrack.author}
          </Text>
        </Box>
      </Flex>
      <VStack w="70%">
        <audio
          id="audio"
          src={currentTrack.src}
          ref={audioRef}
          onLoadedMetadata={onLoadedMetadata}
          onEnded={handleNext}
        />

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
            onClick={handlePrevious}
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
            onClick={togglePlayPause}
          >
            {isPlaying ? (
              <BsFillPauseFill fill="white" />
            ) : (
              <PlayIcon w="8.33px" h="8.88px" />
            )}
          </Flex>
          <IconButton
            aria-label="next song"
            icon={<SongForwardIcon />}
            bg="transparent"
            pl="44.51px"
            _hover={{
              bg: "transparent",
            }}
            onClick={handleNext}
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
        <HStack pt="9.73px" w="full">
          <Text textStyle="smaller" color="white" pr="1">
            {formatTime(timeProgress)}
          </Text>
          <Slider
            colorScheme="yellow"
            defaultValue={0}
            h="4px"
            ref={progressBarRef}
            max={duration}
            onChange={(val) => {
              handleProgressChange(val);
            }}
            value={updateValue}
          >
            <SliderTrack bg="rgba(255, 255, 255, 0.04)">
              <SliderFilledTrack bg={"mainSecondary"} w={"100%"} />
            </SliderTrack>
            <SliderThumb boxSize={3} />
          </Slider>
          <Text textStyle="smaller" color="white" pl="1">
            {formatTime(duration)}
          </Text>
        </HStack>
      </VStack>
      <HStack>
        <IconButton
          aria-label="mute sound"
          w="13px"
          h="13px"
          icon={
            muteVolume || volume < 5 ? (
              <BsFillVolumeMuteFill fill="white" />
            ) : volume < 50 ? (
              <BsVolumeDownFill fill="white" />
            ) : (
              <BsFillVolumeUpFill fill="white" />
            )
          }
          bg="transparent"
          _hover={{
            bg: "transparent",
          }}
          onClick={() => setMuteVolume(!muteVolume)}
        />

        <Box w="160px" pt="2px">
          <Slider
            colorScheme="yellow"
            defaultValue={30}
            min={0}
            max={100}
            value={volume}
            onChange={(val) => setVolume(val)}
          >
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
