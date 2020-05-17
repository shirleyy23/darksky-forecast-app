import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing, palette }: Theme) =>
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
    '@media (max-width: 680px)': {
      root: {
        width: '80%',
      },
    },
  })
);
