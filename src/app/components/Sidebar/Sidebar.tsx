import React, { FunctionComponent } from "react";
import styles from "./Sidebar.module.scss";

interface Props {
  title: string;
}

const Sidebar: FunctionComponent<Props> = ({ title, children }) => {
  return (
    <aside className={styles.Sidebar}>
      <h5>{title}:</h5>
      <ul>
        {children}
      </ul>
    </aside>
  );
};

export default Sidebar;
