import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette, spacing }: Theme) =>
  createStyles({
    container: {
      textAlign: 'center',
      flexBasis: '33%',
      marginBottom: spacing(4),
    },
    icon: {
      color: palette.primary.main,
      marginBottom: spacing(4),
    },
    title: {
      color: palette.secondary.light,
      fontWeight: 600,
    },
    value: {
      marginBottom: spacing(2),
    },
    '@media (max-width: 680px)': {
      container: {
        flexBasis: '50%',
      },
    },
    '@media (max-width: 450px)': {
      container: {
        flexBasis: '100%',
      },
    },
  })
);
