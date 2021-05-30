import Sidebar from "app/components/Sidebar";
import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import styles from "./Search.module.scss";
import { RootState } from "app/store/config";
import { Link } from "react-router-dom";

interface Props { }

const Search: FunctionComponent<Props> = ({ ...props }) => {
  const { searchHistory }: any = useSelector<RootState>((state) => state.main);
  return (
    <div className={styles.Search}>
      <div className="grid-2-1">
        <div className="grid"></div>
        <Sidebar title="history">
          {searchHistory.map((word: string) => (
            <li>
              <Link key={word} to={{ pathname: "/search", search: `query=${word}` }}>
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
