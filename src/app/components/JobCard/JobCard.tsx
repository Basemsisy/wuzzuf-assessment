import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import styles from "./JobCard.module.scss";

interface Props {

}

const JobCard: FunctionComponent<Props> = ({ ...props }) => {
  return (
    <div className={styles.JobCard}>
      <h5>4th grade math teacher</h5>
      <div className={styles.Tags}>
        <span className={styles.Tags__Title}>related skills:</span>
        {Array(5).fill(0).map(() => (<span className={styles.Tags__Item}>operation monitoring</span>))}
      </div>
      <Link to="/">view job details</Link>
    </div>
  );
};

export default JobCard;