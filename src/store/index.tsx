import {
  combineReducers,
  configureStore,
  Reducer,
  AnyAction,
} from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import usersSlice, { USERS_SLICE_NAME } from "./users/usersSice";
import productsSlice, { PRODUCTS_SLICE_NAME } from "./products/productsSice";

const appReducer = combineReducers({
  [USERS_SLICE_NAME]: usersSlice,
  [PRODUCTS_SLICE_NAME]: productsSlice,
});

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  return appReducer(state, action);
};

const persistConfig = {
  key: "root",
  storage: storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type ReduxAction = ReturnType<AppDispatch>;
// export const persistor = persistStore(store);
