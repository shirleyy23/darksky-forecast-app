import React from 'react';
import Background from '../../components/Background/Background';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Heading from '../../components/Heading/Heading';
import PrimaryInfo from '../../components/PrimaryInfo/PrimaryInfo';
import SecondaryInfo from '../../components/SecondaryInfo/SecondaryInfo';
import CustomButton from '../../components/CustomButton/CustomButton';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../Reducers/rootReducer';
import { CombinedCustomTypes } from '../../Store/Types/types';

const useStyles = makeStyles(({ palette, spacing }: Theme) =>
  createStyles({
    root: {
      width: '60%',
      color: palette.secondary.main,
    },
    info: {
      padding: spacing(5),
    },
  })
);

const mapState = (state: RootState): CombinedCustomTypes => ({
  latitude: state.location.latitude,
  longitude: state.location.longitude,
  data: state.location.data,
  loading: state.apiState.loading,
  success: state.apiState.success,
  fail: state.apiState.fail,
});

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

const Forecast: React.FC<Props> = ({ loading, success, fail }) => {
  const classes = useStyles();
  return (
    <Background>
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={12}>
          <Paper>
            <Heading title="Forecast" />
            <section className={classes.info}>
              <PrimaryInfo />
              <SecondaryInfo />
              <CustomButton link="/" content="Back" />
            </section>
          </Paper>
        </Grid>
      </Grid>
    </Background>
  );
};

export default Forecast;
