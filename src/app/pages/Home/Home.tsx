import React, { useEffect, useState } from "react";
import styles from "./Home.module.scss";
import JobCard from "app/components/JobCard";
import { getAllJobs } from "app/store/main/actions";
import Sppinner from "app/components/Sppinner";
import useAction from "app/hooks/useAction";
import { useDispatch } from "react-redux";
import InfiniteScroll from "app/components/InfiniteScroll";

const Home = () => {
  // const { isLoading, data } = useAction(getAllJobs, { limit: 12 });
  const [filters, setFilters] = useState({ offset: 0 });

  const dispatch: any = useDispatch();
  const [jobs, setJobs] = useState<null | any[]>(null);
  const [isLoading, setIsLoading] = useState(false);

  const loadData = async () => {
    try {
      setIsLoading(true);
      const result: { data: any[] } = await dispatch(getAllJobs(filters));
      const newJobs = result.data?.filter((job: any) => !job.links);

      !jobs
        ? setJobs(newJobs)
        : setJobs((prevJobs: any) => [...prevJobs, ...newJobs]);

      setIsLoading(false);
    } catch (error) { }
  };

  useEffect(() => {
    loadData();
  }, [filters]);

  const updateData = () => {
    setFilters((prev) => ({ offset: prev.offset + 12 }));
  };
  if (!jobs) return <Sppinner />;
  return (
    <div className={styles.Home}>
      <InfiniteScroll
        isLoading={isLoading}
        hasMoreData={true}
        onBottomHit={updateData}
        loadOnMount={false}
      >
        <h4>all jobs({jobs?.length})</h4>
        <div className="grid">
          {jobs?.map((job: any) => (
            <JobCard key={job.uuid} jobDetails={job} />
          ))}
        </div>
        <div style={{ position: "relative" }}>
          {isLoading ? <Sppinner /> : null}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Home;
