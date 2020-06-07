import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }: Theme) =>
  createStyles({
    root: {
      color: palette.secondary.main,
    },
  })
);
