import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const useAction = (action: any, params?: any) => {
  const dispatch = useDispatch();
  const [state, setState] = useState<{ isLoading: boolean, data: any, error: any }>({ data: null, isLoading: false, error: null });

  const fetchData = async () => {
    setState({ ...state, isLoading: true })
    try {
      const result = await dispatch(action(params));
      setState({ ...state, isLoading: false, data: result.data })

    } catch (error) {
      setState({ ...state, error })
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return {
    ...state
  };
};

export default useAction;
