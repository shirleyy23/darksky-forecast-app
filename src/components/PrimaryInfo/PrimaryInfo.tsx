import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../Reducers/rootReducer';
import { Location } from '../../Store/Types/types';
import { Box, Typography, Divider } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles(({ palette, spacing }: Theme) =>
  createStyles({
    degrees: {
      fontSize: '.5em',
    },
    icon: {
      color: palette.primary.main,
    },
    container: {
      justifyContent: 'space-between',
      marginBottom: spacing(5),
    },
    divider: {
      flexBasis: '100%',
      backgroundColor: palette.secondary.light,
      marginTop: spacing(5),
    },
    '@media (max-width: 675px)': {
      container: {
        justifyContent: 'flex-start',
      },
    },
  })
);

const mapState = (state: RootState): Location => ({
  latitude: state.location.latitude,
  longitude: state.location.longitude,
  data: state.location.data,
});

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

const PrimaryInfo: React.FC<Props> = ({ latitude, longitude, ...Props }) => {
  const { temperature, summary, timezone } = Props.data;

  const formattedLocationTitle = (location: string): string => {
    const title = location.split('/');
    const [continent, city] = title;
    const newLocationTitle = `${city} (${continent})`;
    return newLocationTitle;
  };

  const classes = useStyles();

  return (
    <Box
      flexWrap="wrap"
      display="flex"
      mb={1}
      component="section"
      className={classes.container}
    >
      <Box>
        <Typography variant="h2" component="h2" data-testid="temperature">
          {temperature}
          <sup className={classes.degrees}>&#8451;</sup>
        </Typography>
      </Box>
      <Box>
        <Typography
          component="h3"
          variant="h5"
          color="primary"
          data-testid="timezone"
        >
          <FontAwesomeIcon className={classes.icon} icon={faMapMarkerAlt} />{' '}
          {formattedLocationTitle(timezone)}
        </Typography>
        <Typography component="h3" variant="subtitle1">
          Located at: {latitude}, {longitude}
        </Typography>
        <Typography component="h3" variant="subtitle1" data-testid="summary">
          <em> {summary}</em>
        </Typography>
      </Box>
      <Divider className={classes.divider} />
    </Box>
  );
};

export default connector(PrimaryInfo);
