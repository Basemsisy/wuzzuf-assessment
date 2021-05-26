import { handleRequests } from "@redux-requests/core";
import { createDriver } from "@redux-requests/axios";
import { httpDriver } from "../../utils/httpDriver";
import { createStore, applyMiddleware } from "redux";
import { onRequest, onSuccess, onError } from "./interceptors";
import { composeEnhancers, middlewares } from "./config";
import reducers from "./rootReducer";

export const configureStore = () => {
  handleRequests({
    driver: createDriver(httpDriver),
    onRequest: onRequest,
    onSuccess: onSuccess,
    onError: onError,
  });

  const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  return { store };
};
