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
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "redux/store";

import { PlayIcon } from "design/icons/PlayIcon";
import { RepeatSongIcon } from "design/icons/RepeatSongIcon";
import { ShuffleIcon } from "design/icons/ShuffleIcon";
import { SongBackIcon } from "design/icons/SongBackIcon";
import { SongForwardIcon } from "design/icons/SongForwardIcon";
import { setCurrentTrack, setIsPlaying } from "redux/reducers/audioPlayerSlice";
import { formatTime } from "utils/utilityFunctions";

const AudioPlayer = () => {
  const songsList = useSelector(
    (state: RootState) => state.audioPlayer?.songList
  );
  const currentTrack = useSelector(
    (state: RootState) => state.audioPlayer.currentTrack
  );
  const isPlaying = useSelector(
    (state: RootState) => state.audioPlayer.isPlaying
  );

  const initialTrackState = {
    artiste: "",
    image: "",
    title: "",
    trackData: "",
    albumName: "",
    duration: "",
  };

  const [trackIndex, setTrackIndex] = useState<number>(0);
  const [timeProgress, setTimeProgress] = useState<number | undefined>(0);
  const [duration, setDuration] = useState<number | undefined>(0);
  const [volume, setVolume] = useState<number>(60);
  const [muteVolume, setMuteVolume] = useState<boolean>(false);
  const [updateValue, setUpdateValue] = useState<number>(0);
  const [repeatSong, setRepeatSong] = useState<boolean>(false);
  const [shuffleSong, setShuffleSong] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement>(null);
  const progressBarRef = useRef<HTMLInputElement>(null);

  const onLoadedMetadata = () => {
    const seconds = audioRef?.current?.duration;
    setDuration(seconds);
    if (progressBarRef && progressBarRef.current) {
      progressBarRef.current.max = String(seconds);
    }
  };

  const dispatch = useDispatch();

  const handleNext = () => {
    if (trackIndex >= songsList.length - 1) {
      setTrackIndex(0);
      dispatch(setCurrentTrack(songsList[0]));
    } else {
      setTrackIndex((prev) => prev + 1);
      dispatch(setCurrentTrack(songsList[trackIndex + 1]));
    }
  };
  const handlePrevious = () => {
    if (trackIndex === 0) {
      let lastTrackIndex = songsList.length - 1;
      setTrackIndex(lastTrackIndex);
      dispatch(setCurrentTrack(songsList[lastTrackIndex]));
    } else {
      setTrackIndex((prev) => prev - 1);
      dispatch(setCurrentTrack(songsList[trackIndex - 1]));
    }
  };

  const togglePlayPause = () => {
    dispatch(setIsPlaying(!isPlaying));
  };

  const handleRepeatSong = () => {
    if (repeatSong) {
      setTrackIndex((prev) => prev);
      setCurrentTrack(songsList[trackIndex]);
    }
  };

  const handleSuffleSong = () => {
    let lastIndex = trackIndex;
    if (shuffleSong) {
      const randomIndex = Math.floor(Math.random() * songsList.length);
      if (randomIndex !== lastIndex) {
        setTrackIndex(randomIndex);
        setCurrentTrack(songsList[randomIndex]);
        lastIndex = randomIndex;
        console.log(lastIndex);
      } else {
        handleSuffleSong();
      }
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = repeatSong;
    }
  }, [repeatSong]);

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
  console.log(currentTrack);
  console.log(initialTrackState);
  return (
    <HStack
      w="100%"
      height="125px"
      background="primaryBg"
      borderTop="1px"
      borderColor="gray.50"
      pl="101px"
      pt="20px"
      position="fixed"
      bottom="0px"
      justifyContent="space-between"
      pr="66px"
      opacity={currentTrack?.title === "" ? "0.2" : "1"}
    >
      <Flex>
        <Img src="/img/audioImages/song-image.svg" alt="song art cover" />
        <Box mt="2px" ml="13px">
          <Text textStyle="h4" color="white">
            {currentTrack?.title}
          </Text>
          <Text textStyle="smallest" color="gray.500" mt="3px">
            {currentTrack?.artiste}
          </Text>
        </Box>
      </Flex>
      <VStack w="70%">
        <audio
          id="audio"
          src={currentTrack?.trackData}
          ref={audioRef}
          onLoadedMetadata={onLoadedMetadata}
          onEnded={
            repeatSong
              ? handleRepeatSong
              : shuffleSong
              ? handleSuffleSong
              : handleNext
          }
        />

        <HStack>
          <IconButton
            aria-label="Shuffle song"
            icon={
              <ShuffleIcon fill={shuffleSong ? "mainSecondary" : "white"} />
            }
            bg="transparent"
            _hover={{
              bg: "transparent",
            }}
            w="16px"
            h="16px"
            onClick={() => setShuffleSong(!shuffleSong)}
          />
          <IconButton
            aria-label="previous song"
            icon={<SongBackIcon />}
            bg="transparent"
            pl="45px"
            pr="44.51px"
            _hover={{
              bg: "transparent",
            }}
            onClick={shuffleSong ? handleSuffleSong : handlePrevious}
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
            onClick={shuffleSong ? handleSuffleSong : handleNext}
          />
          <IconButton
            aria-label="repeat song"
            icon={
              <RepeatSongIcon fill={repeatSong ? "mainSecondary" : "white"} />
            }
            bg="transparent"
            pl="50.67px"
            _hover={{
              bg: "transparent",
            }}
            onClick={() => setRepeatSong(!repeatSong)}
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
              <SliderFilledTrack bg={"mainSecondary"} />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Box>
      </HStack>
    </HStack>
    // </Box>
  );
};

export default AudioPlayer;
