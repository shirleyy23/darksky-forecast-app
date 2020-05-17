import React from 'react';
import { useStyles } from './Styles/Style';
import { LinkProps } from '../../types';

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
