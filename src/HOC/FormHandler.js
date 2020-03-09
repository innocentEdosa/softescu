import React, { useState } from 'react';
import validate from 'validations';

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

  const formatInputError = (error) => {
    if (error) {
      return error.map((err) => <li>{err}</li>);
    }
    return null;
  };

  const validateOnSubmit = () => {
    delete formInput.verifyPassword;
    const validationError = validate(formInput, {
      error: formInput.error,
    });
    if (Object.keys(validationError).length) {
      setFormInput((prevState) => ({
        ...prevState,
        error: validationError,
      }));
      return true;
    }
    return false;
  };


  const handleOnBlur = (event) => {
    event.preventDefault();
    const { name } = event.target;
    const { error = {} } = formInput;
    const validationError = validate(formInput, {
      error,
      focusedFields: [name],
      compare: name === 'verifyPassword' ? 'password' : false,
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
    formatInputError,
    validateOnSubmit,
  });
};

export default FormInputHandler;
