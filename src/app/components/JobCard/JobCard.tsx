import React, { FunctionComponent } from "react";
import useAction from "app/hooks/useAction";
import { getJobRelatedSkills } from "app/store/main/actions";
import { Link } from "react-router-dom";
import styles from "./JobCard.module.scss";

interface Props {
  jobDetails: {
    title: string;
    uuid: string;
  };
}

const JobCard: FunctionComponent<Props> = ({ jobDetails }) => {
  const { isLoading, data, error } = useAction(
    getJobRelatedSkills,
    jobDetails.uuid,
    true
  );

  const renderSkills = () => {
    if (isLoading) {
      return Array(6)
        .fill(0)
        .map((_, i) => <span key={i} className={styles.Tags__Item}></span>);
    } else {
      return error
        ? error.message
        : data?.skills.slice(0, 6).map((skill: any) => (
          <span key={skill.skill_uuid} className={styles.Tags__Item}>
            {skill.skill_name}
          </span>
        ));
    }
  };
  return (
    <div className={styles.JobCard}>
      <h5>{jobDetails.title}</h5>
      <div className={styles.Tags}>
        <span className={styles.Tags__Title}>related skills:</span>

        {renderSkills()}
      </div>
      <Link to={`/job/${jobDetails.uuid}`}>view job details</Link>
    </div>
  );
};

export default JobCard;
