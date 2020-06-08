import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles(({ palette }: Theme) =>
  createStyles({
    root: {
      width: '100%',
      height: '300px',
      overflowY: 'auto',
    },
    scrollBar: {
      '&::-webkit-scrollbar': {
        width: '.5rem',
      },
      '&::-webkit-scrollbar-track': {
        backgroundColor: `${palette.grey[200]}`,
        borderRadius: '.5rem',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: `${palette.secondary.light}`,
        borderRadius: '.5rem',
        outline: `1px solid ${palette.secondary.light}`,
      },
    },
  })
);
