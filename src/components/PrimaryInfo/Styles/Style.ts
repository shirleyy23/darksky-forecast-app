import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette, spacing }: Theme) =>
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
