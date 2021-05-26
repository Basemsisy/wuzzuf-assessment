import { combineReducers } from "redux";
import { handleRequests } from "@redux-requests/core";
import main from "../main/reducer";

const { requestsReducer } = handleRequests();

const reducers = combineReducers({
  requests: requestsReducer,
  main,
});

export default reducers;
