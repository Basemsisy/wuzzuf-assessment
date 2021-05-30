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
  },
  meta: {
    takeLatest: false,
  },
});

export const getJobRelatedJobs = (jopId) => ({
  type: T.GET_RELATED_JOBS,
  request: {
    url: `jobs/${jopId}/related_jobs`,
  },
});

export const getSkillRelatedJobs = (skillId) => ({
  type: T.GET_SKILL_DETAILS,
  request: {
    url: `skills/${skillId}/related_jobs`,
  },
});

export const getSkillDescription = (skillId) => ({
  type: T.GET_SKILL_DESCRIPTION,
  request: {
    url: `skills/${skillId}`,
  },
});

export const getSkillRelatedSkills = (skillId) => ({
  type: T.GET_SKILL_RELATED_SKILLS,
  request: {
    url: `skills/${skillId}/related_skills`,
  },
});

export const getRecommendedJobs = (word) => ({
  type: T.GET_RECOMMENDED_JOBS,
  request: {
    url: `jobs/autocomplete`,
    params: { contains: word },
  },
});
