import React, { FunctionComponent } from "react";
import RelatedCard from "app/components/RelatedCard";
import { getJobRelatedSkills } from "app/store/main/actions";
import styles from "./Job.module.scss";
import Sppinner from "app/components/Sppinner";
import useAction from "app/hooks/useAction";

interface Props {
  match: { params: { id: string } };
}

const Job: FunctionComponent<Props> = ({
  match: {
    params: { id },
  },
}) => {
  const { isLoading, data: jobDetails } = useAction(getJobRelatedSkills, id)

  if (isLoading) return <Sppinner />
  return (
    <div className={styles.Job}>
      <h4>{jobDetails?.job_title}</h4>
      <div className={styles.RelatedWrapper}>
        <h5>related skills:</h5>
        {jobDetails?.skills?.map((skill: any) => (
          <RelatedCard key={skill.skill_uuid} type="skill" data={skill} />
        ))}
      </div>
    </div>
  );
};

export default Job;
