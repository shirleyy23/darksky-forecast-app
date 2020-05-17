import React from 'react';
import Background from '../../components/Background/Background';
import { Grid, Paper } from '@material-ui/core';
import { useStyles } from './Styles/Styles';
import Heading from '../../components/Heading/Heading';
import Form from '../../components/Form/Form';

const Home: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Background>
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={12}>
          <Paper>
            <Heading title="Weather App" />
            <Form />
          </Paper>
        </Grid>
      </Grid>
    </Background>
  );
};

export default Home;
