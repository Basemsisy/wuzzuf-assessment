import { handleRequests } from "@redux-requests/core";
import { createDriver } from "@redux-requests/axios";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { httpDriver } from "../../utils/httpDriver";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import mainReducer from "../main/reducer";
import logger from "redux-logger";
import { env } from "app/utils/env";

const persistConfig = {
  key: "root",
  storage,
};

const { requestsReducer, requestsMiddleware } = handleRequests({
  driver: createDriver(httpDriver),
});

const reducers = combineReducers({
  requests: requestsReducer,
  main: mainReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const middleWares = [...requestsMiddleware];

if (env.NODE_ENV === "development") middleWares.push(logger);

const store = createStore(persistedReducer, applyMiddleware(...middleWares));

let persistor = persistStore(store);

export { store, persistor };
export type RootState = ReturnType<typeof reducers>;
