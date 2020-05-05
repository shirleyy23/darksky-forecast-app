import React from 'react';
import Background from '../../components/Background/Background';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Heading from '../../components/Heading/Heading';
import Form from '../../components/Form/Form';

const useStyles = makeStyles(({ spacing, palette }: Theme) =>
  createStyles({
    root: {
      width: '50%',
      color: palette.secondary.main,
    },

    description: {
      marginBottom: spacing(4),
    },
    button: {
      padding: '.75em 2.25em',
      borderRadius: '30px',
      fontWeight: 800,
    },
  })
);

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
