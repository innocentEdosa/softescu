import { useState, useEffect } from 'react';
import { createApiService } from 'api';

const QuickRequest = ({
  options: {
    url = null, method = 'post', endPoint = '', params = {},
  },
  children,
}) => {
  const service = url
    ? createApiService(method, endPoint, url)
    : createApiService(method, endPoint);
  const [dataState, setDataState] = useState({
    isLoading: false,
    data: false,
    error: false,
  });

  useEffect(() => {
    setDataState((prevState) => ({
      ...prevState,
      isLoading: true,
    }));

    (async () => {
      try {
        const data = await service(params);
        setDataState((prevState) => ({
          ...prevState,
          data,
          isLoading: false,
        }));
      } catch (error) {
        setDataState((prevState) => ({
          ...prevState,
          isLoading: false,
          error: true,
        }));
      }
    })();
  }, []);

  return children(dataState);
};

export default QuickRequest;
