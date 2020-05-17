import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }: Theme) =>
  createStyles({
    root: {
      width: '60%',
      color: palette.secondary.main,
    },
    '@media (max-width: 680px)': {
      root: {
        width: '80%',
      },
    },
  })
);
