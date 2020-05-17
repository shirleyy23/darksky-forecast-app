import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

interface Props {
  link: string;
  title: string;
}

const useStyles = makeStyles(({ palette, spacing }: Theme) =>
  createStyles({
    root: {
      display: 'inline-block',
      color: palette.secondary.light,
      fontWeight: 600,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  })
);
