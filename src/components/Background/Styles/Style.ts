import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette, spacing }: Theme) =>
  createStyles({
    container: {
      backgroundColor: palette.primary.main,
      width: '100%',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflowX: 'hidden',
    },
    '@media (max-width: 959px)': {
      container: {
        minHeight: '100vh',
        height: 'auto',
        padding: spacing(12),
      },
    },
    '@media (max-width: 680px)': {
      container: {
        padding: spacing(8),
      },
    },
  })
);
