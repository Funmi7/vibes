import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "redux/store";

type AuthorizationSliceType = {
  loggedIn: boolean;
  userToken: string;
};

const initialState: AuthorizationSliceType = {
  loggedIn: false,
  userToken: "",
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
    setUserToken: (state, action: PayloadAction<string>) => {
      state.userToken = action.payload;
    },
  },
});

export const { setLoggedIn, setLoggedOff, setUserToken } =
  authorizationSlice.actions;
export const selectLoggedIn = (state: RootState) =>
  state.authorization.loggedIn;

export default authorizationSlice.reducer;
