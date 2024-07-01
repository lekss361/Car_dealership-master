import './Button.scss';
interface ButtonProps {
  text: string;
}

export const Button = (props: ButtonProps) => {
  return <button className="btn">{props.text}</button>;
};
