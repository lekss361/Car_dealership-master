import './FooterTitle.scss';
import React from 'react';

interface FooterTitleProps {
  name: string;
}

export const FooterTitle = (props: FooterTitleProps) => {
  return (
    <div className="footer-title">
      <p>{props.name}</p>
      <div className="accent-line"></div>
    </div>
  );
};
