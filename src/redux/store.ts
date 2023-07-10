import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { AnyAction, combineReducers, Reducer } from "redux";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import authorizationReducer, {
  setLoggedOff,
} from "./reducers/authorizationSlice";
import { audioPlayerSlice } from "./reducers/audioPlayerSlice";

const appReducer = combineReducers({
  authorization: authorizationReducer,
  audioPlayer: audioPlayerSlice.reducer,
});

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  if (action.type === setLoggedOff.type) {
    state = {} as RootState;
  }
  return appReducer(state, action);
};

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  devTools: true,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof appReducer>;
