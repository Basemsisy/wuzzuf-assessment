import { compose } from "redux";
import logger from "redux-logger";
import { env } from "../../utils/env";
import { handleRequests } from "@redux-requests/core";

const { requestsMiddleware } = handleRequests();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [...requestsMiddleware];

if (env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export { composeEnhancers, middlewares };
