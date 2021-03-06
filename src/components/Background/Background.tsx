import React from 'react';
import { useStyles } from './Styles/Style';
import { ChildrenProps } from '../../types';

const Background: React.FC<ChildrenProps> = ({ children }) => {
  const classes = useStyles();
  return (
    <div data-testid="background" className={classes.container}>
      {children}
    </div>
  );
};

export default Background;
