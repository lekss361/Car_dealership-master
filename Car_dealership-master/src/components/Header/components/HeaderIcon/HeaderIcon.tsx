import './HeaderIcon.scss';

interface HeaderIconProps {
  url: string;
  src: string;
  count: number;
}

// добавить счетчики для избранного и сравнения

export const HeaderIcon = (props: HeaderIconProps) => {
  return (
    <a href={props.url} className="header-icon">
      <img src={props.src} alt=""></img>
      {props.count > 0 ? <div className="count">{props.count ? props.count : '99+'}</div> : <></>}
    </a>
  );
};
