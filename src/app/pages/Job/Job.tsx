import React, { FunctionComponent } from "react";
import { getJobRelatedSkills } from "app/store/main/actions";
import styles from "./Job.module.scss";
import Sppinner from "app/components/Sppinner";
import useAction from "app/hooks/useAction";
import RelatedWrapper from "app/components/RelatedWrapper";

interface Props {
  match: { params: { id: string } };
}

const Job: FunctionComponent<Props> = ({
  match: {
    params: { id },
  },
}) => {
  const { isLoading, data: jobDetails } = useAction(getJobRelatedSkills, id);

  if (isLoading) return <Sppinner />;
  return (
    <div className={styles.Job}>
      <h4>{jobDetails?.job_title}</h4>
      <RelatedWrapper type="skill" data={jobDetails?.skills} />
    </div>
  );
};

export default Job;
