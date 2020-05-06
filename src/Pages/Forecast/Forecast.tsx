import React from 'react';
import Background from '../../components/Background/Background';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Heading from '../../components/Heading/Heading';

const Forecast: React.FC<{}> = () => {
  return (
    <Background>
      <Grid container spacing={3}>
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
