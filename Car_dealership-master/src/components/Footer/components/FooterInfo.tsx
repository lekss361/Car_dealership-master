import './FooterInfo.scss';

interface FooterInfoProps {
  src: string;
  text: string;
}

export const FooterInfo = (props: FooterInfoProps) => {
  return (
    <div className="footer-info">
      <img src={props.src} alt="" />
      <p>{props.text}</p>
    </div>
  );
};
