import Sidebar from "app/components/Sidebar";
import React, { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Search.module.scss";
import { RootState } from "app/store/config";
import { Link, useHistory } from "react-router-dom";
import { getRecommendedJobs } from "app/store/main/actions";
import JobCard from "app/components/JobCard";
import Sppinner from "app/components/Sppinner";

interface Props { }

const Search: FunctionComponent<Props> = ({ ...props }) => {
  const dispatch: any = useDispatch();
  const { searchHistory }: any = useSelector<RootState>((state) => state.main);
  const history = useHistory();
  const urlParams = new URLSearchParams(history.location.search);
  const { searchResult, loading }: any = useSelector<RootState>(
    (state) => state.search
  );

  const loadData = () => {
    dispatch(getRecommendedJobs(urlParams.get("query")));
  };

  useEffect(() => {
    loadData();
  }, [history.location.search]);

  if (loading) return <Sppinner />;
  return (
    <div className={styles.Search}>
      <div className="grid-2-1">
        {searchResult ? (
          <div className="grid">
            {searchResult.map((job: any) => (
              <JobCard key={job.uuid} jobDetails={job} />
            ))}
          </div>
        ) : (
          <div
            style={{ flex: 1, textAlign: "center", textTransform: "uppercase" }}
          >
            no data found
          </div>
        )}

        <Sidebar title="history">
          {searchHistory.map((word: string, index: number) => (
            <li key={word + index}>
              <Link to={{ pathname: "/search", search: `query=${word}` }}>
                {word}
              </Link>
            </li>
          ))}
        </Sidebar>
      </div>
    </div>
  );
};

export default Search;
