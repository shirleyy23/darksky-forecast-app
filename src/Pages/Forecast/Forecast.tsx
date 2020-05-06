import React from 'react';
import Background from '../../components/Background/Background';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Heading from '../../components/Heading/Heading';

const useStyles = makeStyles(({ palette }: Theme) =>
  createStyles({
    root: {
      width: '60%',
      color: palette.secondary.main,
    },
  })
);

const Forecast: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Background>
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={12}>
          <Paper>
            <Heading title="Forecast" />
          </Paper>
        </Grid>
      </Grid>
    </Background>
  );
};

export default Forecast;
