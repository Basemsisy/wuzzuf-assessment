import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.scss";

interface Props {
  title: string;
  data: Array<any>;
  type: 'job' | 'skill'
}

const Sidebar: FunctionComponent<Props> = ({ title, data, type }) => {
  return (
    <aside className={styles.Sidebar}>
      <h5>{title}:</h5>
      <ul>
        {data?.map((item, i) => (
          <li key={item.uuid}>
            <Link to={`/${type}/${item.uuid}`}>
              {type === 'job' ? item?.title : item.skill_name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
