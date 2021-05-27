import * as T from "./types";

export const getAllJobs = (params) => ({
  type: T.GET_ALL_JOBS,
  request: {
    url: "jobs",
    params,
  },
});

export const getJobRelatedSkills = (jopId) => ({
  type: T.GET_RELATED_SKILLS,
  request: {
    url: `jobs/${jopId}/related_skills`,
    params: { limit: 2 },
  },
  meta: {
    takeLatest: false,
  },
});
