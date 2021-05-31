import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const useAction = (action: any, params?: any, canUpdate: boolean = false) => {
  const dispatch = useDispatch();
  const [state, setState] = useState<{
    isLoading: boolean;
    data: any;
    error: any;
  }>({ data: null, isLoading: true, error: null });

  const fetchData = async () => {
    setState({ ...state, isLoading: true });
    try {
      const result = await dispatch(action(params));
      if (result.error) {
        setState((prevState) => ({
          ...prevState,
          error: result.error,
          isLoading: false,
        }));
      } else {
        setState((prevState) => ({
          ...prevState,
          data: result.data,
          isLoading: false,
        }));
      }
    } catch (error) { }
  };
  useEffect(
    () => {
      fetchData();
    },
    canUpdate ? [params] : []
  );

  return {
    ...state,
  };
};

export default useAction;
