import { Typography } from '@mui/material';
import React from 'react';

function PageTitle({ children, ...props }) {
  return (
    <Typography
      component="h1"
      color="primary"
      sx={{ fontWeight: 700, fontSize: '22px' }}
      {...props}>
      {children}
    </Typography>
  );
}

export default PageTitle;
