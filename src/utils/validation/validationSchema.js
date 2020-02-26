const formatValidationErrorEntry = (oldEntry, newEntry) => {
  const entry = oldEntry ? [...oldEntry, newEntry] : [newEntry];
  return entry;
};

export const nameValidation = (name, { initialValidationError = [], fieldName = 'username', replyIdentifier }) => {
  const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/g;
  const validationError = { ...initialValidationError } || {};
  if (symbolRegex.test(name)) {
    validationError[fieldName] = formatValidationErrorEntry(validationError[fieldName], `${replyIdentifier} cannot contain symbols`);
  }
  if (name.length < 3) {
    validationError[fieldName] = formatValidationErrorEntry(validationError[fieldName], `${replyIdentifier}  is too short. Please provide more than 2 alphabets`);
  }
  return validationError;
};

export const emailValidation = (email, { initialValidationError, fieldName, replyIdentifier }) => {
  // eslint-disable-next-line no-useless-escape
  const emailRex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const validationError = { ...initialValidationError } || {};
  if (!emailRex.test(email)) {
    validationError[fieldName] = formatValidationErrorEntry(validationError[fieldName], `${replyIdentifier} is not valid`);
  }
  return validationError;
};

export const passwordValidation = (
  password,
  { initialValidationError, fieldName, replyIdentifier },
) => {
  // const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/g;
  const validationError = { ...initialValidationError } || {};
  if (password.length < 8) {
    validationError[fieldName] = formatValidationErrorEntry(
      validationError[fieldName],
      `${replyIdentifier} should be more than 8 characters`,
    );
  }
  return validationError;
};

export const compareValueValidation = (
  value1,
  {
    compare, initialValidationError, fieldName, replyIdentifier,
  },
) => {
  const validationError = { ...initialValidationError } || {};
  if (!compare) {
    validationError[fieldName] = formatValidationErrorEntry(
      validationError[fieldName],
      `Please provide ${replyIdentifier}`,
    );
  }
  if (value1 !== compare) {
    validationError[fieldName] = formatValidationErrorEntry(
      validationError[fieldName],
      `${replyIdentifier} fields needs to match`,
    );
  }
  return validationError;
};
