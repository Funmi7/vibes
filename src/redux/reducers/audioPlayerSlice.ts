import { createSlice } from "@reduxjs/toolkit";
import { TrackType } from "common/types";

type AudioPlayerSlice = {
  songList: TrackType[];
  isPlaying: boolean;
  currentTrack: TrackType;
  trackIndex: number;
};
const initialState: AudioPlayerSlice = {
  songList: [],
  isPlaying: false,
  currentTrack: {
    artiste: "",
    image: "",
    title: "",
    trackData: "",
    albumName: "",
    duration: "",
  },
  trackIndex: 0,
};

export const audioPlayerSlice = createSlice({
  name: "audioPlayer",
  initialState,
  reducers: {
    setSongsList: (state, action) => {
      state.songList = action.payload;
    },
    setIsPlaying: (state, action) => {
      state.isPlaying = action.payload;
    },
    setCurrentTrack: (state, action) => {
      state.currentTrack = action.payload;
    },
    setTrackIndex: (state, action) => {
      state.trackIndex = action.payload;
    },
  },
});

export const { setSongsList, setIsPlaying, setCurrentTrack, setTrackIndex } =
  audioPlayerSlice.actions;

// export default audioPlayerSlice.reducer;
