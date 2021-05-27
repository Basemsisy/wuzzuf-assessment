import { getJobRelatedSkills } from "app/store/main/actions";
import React, { FunctionComponent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./JobCard.module.scss";

interface Props {
  jobDetails: {
    title: string;
    uuid: string;
  };
}

const JobCard: FunctionComponent<Props> = ({ jobDetails }) => {
  const dispatch: any = useDispatch();
  const [skills, setSkills] = useState<null | any[]>(null);

  const loadData = async () => {
    const result = await dispatch(getJobRelatedSkills(jobDetails.uuid));
    const data = result.data.skills.slice(0, 6);
    setSkills(data);
    console.log(data);
  };
  useEffect(() => {
    loadData();
  }, []);

  const renderSkills = () => {
    return skills
      ? skills.map((skill) => (
        <span className={styles.Tags__Item}>{skill.skill_name}</span>
      ))
      : Array(6)
        .fill(0)
        .map(() => <span className={styles.Tags__Item}></span>)
  }
  return (
    <div className={styles.JobCard}>
      <h5>{jobDetails.title}</h5>
      <div className={styles.Tags}>
        <span className={styles.Tags__Title}>related skills:</span>

        {renderSkills()}
      </div>
      <Link to="/">view job details</Link>
    </div>
  );
};

export default JobCard;
