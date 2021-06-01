import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from "react";
import styles from "./SearchBox.module.scss";
import { getRecommendedJobs } from "app/store/main/actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import debounce from "lodash.debounce";
import { RootState } from "app/store/config";

interface Props { }

const SearchBox: FunctionComponent<Props> = () => {
  const dispatch: any = useDispatch();
  const history = useHistory();
  const urlParams = new URLSearchParams(history.location.search);
  const [inputValue, setInputValue] = useState<string>(
    urlParams.get("query") || ""
  );
  const { searchJobs }: any = useSelector<RootState>((state) => state.main);
  const [show, setShow] = useState(true);

  const hideList = ["job", "skill"];


  const handleChange = (word: string) => {
    setInputValue(word);
    debouncedSearch(word);
  };

  const loadData = async (word: string) => {
    if (word.length >= 3) {
      await dispatch(getRecommendedJobs(word));
      history.push({ pathname: "/search", search: `query=${word}` });
    } else {
      history.push("/");
    }
  };

  const debouncedSearch = useCallback(
    debounce((newValue) => loadData(newValue), 1000),
    []
  );

  const toggleSearchBox = () => {
    if (hideList.includes(history.location.pathname.split("/")[1])) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  useEffect(() => {
    history.listen(() => {
      toggleSearchBox();
    });
  }, []);

  if (!show) return null;

  return (
    <div className={styles.SearchBox}>
      <input
        type="search"
        list="jobs"
        placeholder="search keyword"
        value={inputValue}
        onChange={(e) => handleChange(e.target.value)}
      />
      <datalist id="jobs">
        {searchJobs?.map((option: any) => (
          <option key={option.uuid} value={option.normalized_job_title}>
            {option.normalized_job_title}
          </option>
        ))}
      </datalist>
    </div>
  );
};

export default SearchBox;