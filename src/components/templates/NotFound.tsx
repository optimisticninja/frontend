import React from 'react';

import { Typography } from '@mui/material';

import { thumbsDown } from '../../constants';
import { StyledPre } from '../atoms';
import { useDocumentTitle } from '../../hooks';

const NotFound = function NotFound(): React.ReactElement {
  useDocumentTitle('Not Found');

  return (
    <>
      <Typography textAlign="center" variant="h3">
        Not Found
      </Typography>
      <StyledPre
        baseFontSize="5px"
        largeResolution="1300px"
        largeFontSize="3px"
        mediumResolution="900px"
        mediumFontSize="2px"
        smallResolution="360px"
        smallFontSize="1px"
      >
        {thumbsDown}
      </StyledPre>
    </>
  );
};

export default NotFound;
