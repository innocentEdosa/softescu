import SvgIcon from '@material-ui/core/SvgIcon';
import React from 'react';

const RomanianFlag = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <SvgIcon width="450" height="300" viewBox="0 0 27 18" {...props}>
    <rect width="27" height="18" fill="#f21830" />
    <rect width="18" height="18" fill="#ffe60d" />
    <rect width="9" height="18" fill="#0045e6" />
  </SvgIcon>
);

export default RomanianFlag;
