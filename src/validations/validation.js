import {
  compareValueValidation, nameValidation, passwordValidation, emailValidation,
} from './validationSchema';

export const validate = (
  formInput,
  {
    error = {}, focusedFields = false, compare = false, replyIdentifier = '',
  },
) => {
  let validationError = { ...error } || {};

  const handleValidation = (fieldValue, options) => {
    switch (options.fieldName) {
      case 'username':
        return nameValidation(fieldValue, options);
      case 'email':
        return emailValidation(fieldValue, options);
      case 'password':
        return passwordValidation(fieldValue, options);
      case 'verifyPassword':
        return compareValueValidation(fieldValue, options);
      default:
        return options.initialValidationError;
    }
  };

  (() => {
    const usedFocusedFields = focusedFields || Object.keys(formInput);
    for (let i = 0; i < usedFocusedFields.length; i += 1) {
      const fieldName = usedFocusedFields[i];
      const replyText = replyIdentifier || fieldName;
      const fieldValue = formInput[fieldName];
      if (validationError[fieldName]) {
        delete validationError[fieldName];
      }
      if (!fieldValue) {
        validationError[fieldName] = validationError[fieldName]
          ? [...validationError[fieldName], `Please Provide ${fieldName}`]
          : [`Please provide ${replyText}`];
        // eslint-disable-next-line no-continue
        continue;
      }
      const validationOptions = {
        validationError,
        fieldName,
        allValues: formInput,
        compare: compare ? formInput[compare] : false,
        replyIdentifier: replyText,
      };
      const newError = handleValidation(fieldValue, validationOptions);
      validationError = { ...validationError, ...newError };
    }
  })();
  return validationError;
};

export default validate;
