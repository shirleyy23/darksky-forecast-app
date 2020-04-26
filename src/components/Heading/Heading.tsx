import React from 'react';
import { Box, Typography } from '@material-ui/core';

interface Props {
  title: string;
}

const Heading: React.FC<Props> = ({ title }) => {
  return (
    <Box mb={4}>
      <Typography variant="h4" component="h1">
        {title}
      </Typography>
    </Box>
  );
};

export default Heading;
