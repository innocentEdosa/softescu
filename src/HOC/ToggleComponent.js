const ToggleComponent = ({ check, component }) => {
  const returnedComponent = check ? component : null;
  return returnedComponent;
};

export default ToggleComponent;
