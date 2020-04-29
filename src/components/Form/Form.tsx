import React from 'react';
import { Box, Grid, TextField, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import CustomButton from '../CustomButton/CustomButton';
import { connect } from 'react-redux';
import { RootState } from '../../Reducers/rootReducer';
import { Location } from '../../Store/Types/types';

type Props = Location;

const useStyles = makeStyles(({ palette, spacing }: Theme) =>
  createStyles({
    root: {
      color: palette.secondary.main,
      padding: spacing(5),
    },
    input: {
      width: '100%',
    },
  })
);

const Form: React.FC<{}> = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root} component="section">
      <Grid container spacing={5} component="form">
        <Grid item xs={12}>
          <Typography variant="subtitle1" component="p">
            Enter the <strong>latitude</strong> and <strong>longitude</strong>
            &nbsp;values of the location you would like to get weather
            information for.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField className={classes.input} id="latitude" label="Latitude" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            className={classes.input}
            id="longitude"
            label="Longitude"
          />
        </Grid>
        <Grid item xs={12}>
          <CustomButton link="/forecast" content="SEARCH" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Form;
