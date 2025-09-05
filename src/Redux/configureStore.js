import { thunk } from "redux-thunk";
import userSlice from "./features/User/userSlice.js";
import storage from "redux-persist/lib/storage";
import {
  configureStore,
  combineReducers,
  applyMiddleware,
} from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  // whitelist: ["auth"],
};

const rootReducer = combineReducers({
  user: userSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore(
  { reducer: persistedReducer },
  applyMiddleware(thunk)
);

const persistor = persistStore(store);
export { store, persistor };
