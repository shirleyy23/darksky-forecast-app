import React from 'react';
import { Paper, Box } from '@material-ui/core';
import { useStyles } from './Styles/CustomTabPanel';
import { TabPanelProps } from '../../types';

const CustomTabPanel: React.FC<TabPanelProps> = ({
  children,
  value,
  index,
  ...other
}) => {
  const classes = useStyles();
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className={`${classes.root} ${classes.scrollBar}`}
    >
      {value === index && (
        <Box component="section" color="secondary">
          <Paper data-testid={`tabs-container-${index}`}>{children}</Paper>
        </Box>
      )}
    </div>
  );
};

export default CustomTabPanel;
