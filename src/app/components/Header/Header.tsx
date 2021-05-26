import React, { FunctionComponent } from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./Header.module.scss";
import SearchBox from "../SearchBox"

interface Props { }

const Header: FunctionComponent<Props> = ({ ...props }) => {
  return (
    <div className={styles.Header}>
      <nav className={styles.Nav}>
        <Link to="/">
          <h5>JobsNow</h5>
        </Link>
        <ul>
          <li>
            <NavLink to="/">home</NavLink>
          </li>

          <li>
            <NavLink to="/search">search</NavLink>
          </li>
          <li>
            <NavLink to="/history">history</NavLink>
          </li>
        </ul>
      </nav>
      <SearchBox />
    </div>
  );
};

export default Header;
