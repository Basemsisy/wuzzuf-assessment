import * as T from "./types";

export const getAllJobs = (params) => ({
  type: T.GET_ALL_JOBS,
  request: {
    url: "jobs",
    params,
  },
});
