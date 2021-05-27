import React from "react";
import styles from "./Home.module.scss";
import JobCard from "app/components/JobCard";
import { getAllJobs } from "app/store/main/actions";
import Sppinner from "app/components/Sppinner";
import useAction from "app/hooks/useAction";

const Home = () => {
  const { isLoading, data } = useAction(getAllJobs);
  const jobs = data?.slice(0, data.length - 1)
  if (isLoading) return <Sppinner />;
  return (
    <div className={styles.Home}>
      <h4>all jobs({jobs?.length})</h4>
      <div className="grid">
        {jobs?.map((job: any) => (
          <JobCard key={job.uuid} jobDetails={job} />
        ))}
      </div>
    </div>
  );
};

export default Home;
