import { useState } from 'react';
import validate from 'validation';

const FormInputHandler = ({ values = {}, children, replyIdentifierMap = {} }) => {
  const [formInput, setFormInput] = useState({
    ...values,
  });

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const handleOnBlur = (event) => {
    event.preventDefault();
    const { name } = event.target;
    const { error = {} } = formInput;
    const validationError = validate(formInput, {
      error,
      focusedFields: [name],
      compare: name === 'vpsw' ? 'psw' : false,
      replyIdentifier: replyIdentifierMap[name],
    });
    setFormInput((prevState) => ({
      ...prevState,
      error: validationError,
    }));
  };

  return children({
    formInput,
    handleInputChange,
    handleOnBlur,
    setFormInput,
  });
};

export default FormInputHandler;
