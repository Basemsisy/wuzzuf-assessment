import React from "react";
import styles from "./Home.module.scss";

const Home = ({ ...props }) => {
  return (
    <div className={styles.Home}>
      <p>home page</p>
    </div>
  );
};

export default Home;
