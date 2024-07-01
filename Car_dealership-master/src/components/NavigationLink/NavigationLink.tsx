import React from 'react';

// need to add ability added class "active-link" for chosen link

interface NavigationLinkProps {
  name: string;
  url: string;
}

export const NavigationLink = (props: NavigationLinkProps) => {
  return (
    <a href={props.url} className="nav-link">
      {props.name}
    </a>
  );
};
