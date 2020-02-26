import { useState, useEffect } from 'react';
import { emitter } from 'utils/eventEmitter';

const AlertEmitter = ({ emitterReference, children }) => {
  const [alertState, setAlertState] = useState({
    show: false,
    autoClose: false,
    content: '',
    severity: 'info',
    style: '',
  });

  emitter.on(emitterReference, (content, options) => {
    setAlertState((prevState) => ({
      ...prevState,
      ...options,
      content,
      show: true,
    }));
  });

  const onClose = () => {
    setAlertState((prevState) => ({
      ...prevState,
      show: false,
      content: '',
    }));
  };

  useEffect(() => {
    (() => {
      if (alertState.autoClose) {
        setTimeout(() => {
          setAlertState((prevState) => ({
            ...prevState,
            show: false,
            content: '',
          }));
        }, 2000);
      }
    })();
  }, [alertState.show]);

  return children({ ...alertState, onClose });
};

export default AlertEmitter;
