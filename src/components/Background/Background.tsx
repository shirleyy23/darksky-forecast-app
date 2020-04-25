import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Background: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default Background;
