import './FooterLink.scss';

interface FooterLinkProps {
  url: string;
  text: string;
}

export const FooterLink = (props: FooterLinkProps) => {
  return (
    <a href={props.url} className="footer-link">
      {props.text}
    </a>
  );
};
