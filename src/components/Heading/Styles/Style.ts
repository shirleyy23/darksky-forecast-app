import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette, spacing }: Theme) =>
  createStyles({
    root: {
      backgroundColor: palette.secondary.main,
      color: 'white',
      padding: spacing(5),
      letterSpacing: '-1px',
      marginBottom: 0,
    },
    heading: {
      fontWeight: 600,
      letterSpacing: '-1px',
    },
    icon: {
      display: 'inline-block',
      marginLeft: spacing(2),
    },
  })
);
