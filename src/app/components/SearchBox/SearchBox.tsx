import React, {
  FunctionComponent,
  useCallback,
  useState,
} from "react";
import styles from "./SearchBox.module.scss";
import { getRecommendedJobs } from "app/store/main/actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import debounce from "lodash.debounce";

interface Props { }

const SearchBox: FunctionComponent<Props> = ({ }) => {
  const dispatch: any = useDispatch();
  const history = useHistory();
  const [inputValue, setInputValue] = useState<string>("");
  const [options, setOptions] = useState<any[] | null>(null);


  const handleChange = (word: string) => {
    setInputValue(word);
    debouncedSearch(word);
  };

  const loadData = async (word: string) => {
    if (word.length >= 3) {
      history.push({ pathname: '/search', search: `query=${word}` })
      let response = await dispatch(getRecommendedJobs(word));
      setOptions(response.data);
    } else {
      history.push('/')
      setOptions(null);
    }
  };

  const debouncedSearch = useCallback(
    debounce((newValue) => loadData(newValue), 1000),
    []
  );

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
        {options?.map((option) => (
          <option
            value={option.normalized_job_title}
          >
            {option.normalized_job_title}
          </option>
        ))}
      </datalist>
    </div>
  );
};

export default SearchBox;