import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "redux/store";

type AuthorizationSliceType = {
  loggedIn: boolean;
};

const initialState: AuthorizationSliceType = {
  loggedIn: false,
};

const authorizationSlice = createSlice({
  name: "authorization",
  initialState,
  reducers: {
    setLoggedIn: (state) => {
      state.loggedIn = true;
    },
    setLoggedOff: (state) => {
      state.loggedIn = false;
    },
  },
});

export const { setLoggedIn, setLoggedOff } = authorizationSlice.actions;
export const selectLoggedIn = (state: RootState) =>
  state.authorization.loggedIn;

export default authorizationSlice.reducer;
