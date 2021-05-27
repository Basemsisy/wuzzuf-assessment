import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import styles from "./RelatedCard.module.scss";

interface Props {
  data: {
    title: string;
    description: string
  }
}

const RelatedCard: FunctionComponent<Props> = ({ data }) => {
  return (
    <div className={styles.RelatedCard}>
      <h5>
        <Link to="/skill">{data.title}</Link>
      </h5>

      {data.description && <p>
        {data.description}
      </p>}
      <ul className={styles.Properties}>
        <li className={styles.Properties__Item}>
          <b>type: </b>
          <span>test</span>
        </li>
        <li className={styles.Properties__Item}>
          <b>type: </b>
          <span>test</span>
        </li>
        <li className={styles.Properties__Item}>
          <b>type: </b>
          <span>test</span>
        </li>
      </ul>
    </div>
  );
};

export default RelatedCard;
