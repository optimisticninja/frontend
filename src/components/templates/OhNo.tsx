/* eslint-disable max-len */
import React from 'react';
import { Typography } from '@mui/material';
import { useDocumentTitle } from '../../hooks';

const OhNo = function OhNo(): React.ReactElement {
  useDocumentTitle('Oh no');

  return (
    <>
      <Typography variant="h3" textAlign="center">Oh no you didn&#39;t</Typography>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/6PI-dBT7Lt4?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </div>
    </>
  );
};

export default OhNo;
