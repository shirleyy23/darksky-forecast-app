import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { LinkProps } from '../../types';

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

const ExternalLink: React.FC<LinkProps> = ({ link, content }) => {
  const classes = useStyles();
  return (
    <em>
      <a
        className={classes.root}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="external-link"
      >
        {content}
      </a>
    </em>
  );
};

export default ExternalLink;
