import './HeaderInfoLink.scss';

interface HeaderInfoLinkProps {
  url: string;
  src: string;
  text: string;
}

export const HeaderInfoLink = (props: HeaderInfoLinkProps) => {
  return (
    <a href={props.url} className="header-info-link">
      <img src={props.src} alt=""></img>
      {props.text}
    </a>
  );
};
