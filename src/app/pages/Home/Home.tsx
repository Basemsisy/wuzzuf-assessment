import React, { useEffect, useState } from "react";
import styles from "./Home.module.scss";
import JobCard from "app/components/JobCard";
import { useDispatch } from "react-redux";
import { getAllJobs } from "app/store/main/actions";
import Sppinner from "app/components/Sppinner";

const Home = ({ ...props }) => {
  const dispatch: any = useDispatch();
  const [jobs, setJobs] = useState<null | any[]>(null);

  const loadData = async () => {
    try {
      const result: { data: any[] } = await dispatch(getAllJobs());
      result.data.pop();
      setJobs(result.data);
    } catch (error) {

      setJobs([]);
    }
  };
  useEffect(() => {
    loadData();
  }, []);

  if (!jobs) return <Sppinner />;
  return (
    <div className={styles.Home}>
      <div className="container">
        <h4>all jobs({jobs.length})</h4>
        <div className="grid">
          {jobs.map((job) => (
            <JobCard key={job.uuid} jobDetails={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
