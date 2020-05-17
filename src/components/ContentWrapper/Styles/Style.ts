import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ spacing, palette }: Theme) =>
  createStyles({
    root: {
      padding: spacing(5),
      color: palette.secondary.main,
    },
    paragraph: {
      paddingTop: spacing(1),
    },
    '@media (max-width: 499px)': {
      paragraph: {
        paddingTop: spacing(4),
        textAlign: 'left',
      },
    },
  })
);
