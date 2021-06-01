import { error, success } from "@redux-requests/core";
import * as T from "./types";

const initialState = {
  searchResult: null,
  loading: true,
};

export default (state = initialState, { type, response }) => {
  switch (type) {
    case T.GET_RECOMMENDED_JOBS: {
      return {
        ...state,
        loading: true,
      };
    }

    case success(T.GET_RECOMMENDED_JOBS): {
      return { ...state, searchResult: response.data, loading: false };
    }
    case error(T.GET_RECOMMENDED_JOBS): {
      return { ...state, searchResult: null, loading: false };
    }
    default:
      return state;
  }
};
