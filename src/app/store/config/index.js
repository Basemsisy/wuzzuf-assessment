import { handleRequests } from "@redux-requests/core";
import { createDriver } from "@redux-requests/axios"; // or another driver
import { applyMiddleware, combineReducers, createStore } from "redux";
import { httpDriver } from "../../utils/httpDriver";

const configureStore = () => {
  const { requestsReducer, requestsMiddleware } = handleRequests({
    driver: createDriver(httpDriver),
  });

  const reducers = combineReducers({
    requests: requestsReducer,
  });

  const store = createStore(reducers, applyMiddleware(...requestsMiddleware));

  return store;
};

export const store = configureStore();
