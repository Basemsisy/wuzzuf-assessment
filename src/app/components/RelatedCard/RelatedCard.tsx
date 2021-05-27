import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import styles from "./RelatedCard.module.scss";

interface Props {
  type: "job" | "skill";
  data: any;
}

const RelatedCard: FunctionComponent<Props> = ({ data, type }) => {
  const isSkillCard = type === "skill";
  return (
    <div className={styles.RelatedCard}>
      <h5>
        <Link
          to={
            isSkillCard ? `/skill/${data.skill_uuid}` : `/job/${data.job_uuid}`
          }
        >
          {isSkillCard ? data.skill_name : data.job_title}
        </Link>
      </h5>

      {isSkillCard && <p>{data.description}</p>}
      <ul className={styles.Properties}>
        {isSkillCard && (
          <li className={styles.Properties__Item}>
            <b>type: </b>
            <span>{data.skill_type}</span>
          </li>
        )}

        <li className={styles.Properties__Item}>
          <b>importance: </b>
          <span>{data.importance}</span>
        </li>

        <li className={styles.Properties__Item}>
          <b>level: </b>
          <span>{data.level}</span>
        </li>
      </ul>
    </div>
  );
};

export default RelatedCard;
