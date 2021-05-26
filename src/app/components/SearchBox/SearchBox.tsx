import React, { FunctionComponent } from "react";
import styles from "./SearchBox.module.scss";

interface Props {

}

const SearchBox: FunctionComponent<Props> = ({ ...props }) => {
  return (
    <div className={styles.SearchBox}>
      <input type="search" placeholder="search keyword" />
    </div>
  );
};

export default SearchBox;