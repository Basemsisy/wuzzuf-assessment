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
      setState({ ...state, isLoading: false, data: result.data });
    } catch (error) {
      setState({ ...state, error });
    }
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
