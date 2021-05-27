import React from "react";
import styles from "./Home.module.scss";
import JobCard from 'app/components/JobCard'

const Home = ({ ...props }) => {
  return (
    <div className={styles.Home}>
      <div className="container">
        <h4>all jobs(220)</h4>
        <div className="grid">
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
