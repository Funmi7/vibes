import { createSlice } from "@reduxjs/toolkit";
import { TrackType } from "common/types";

type AudioPlayerSlice = {
  songList: TrackType[];
  isPlaying: boolean;
  currentTrack: TrackType;
};
const initialState: AudioPlayerSlice = {
  songList: [],
  isPlaying: false,
  currentTrack: {
    artiste: "",
    duration: "",
    image: "",
    title: "",
    trackData: "",
  },
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
  },
});

export const { setSongsList, setIsPlaying, setCurrentTrack } =
  audioPlayerSlice.actions;

// export default audioPlayerSlice.reducer;
