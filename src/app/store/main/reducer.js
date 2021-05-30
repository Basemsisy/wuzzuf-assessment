import * as T from "./types";

const initialState = {
  searchHistory: [],
};

export default (state = initialState, { request, type }) => {
  switch (type) {
    case T.GET_RECOMMENDED_JOBS: {
      return {
        ...state,
        searchHistory: [...state.searchHistory, request.params.contains],
      };
    }
    default:
      return state;
  }
};
