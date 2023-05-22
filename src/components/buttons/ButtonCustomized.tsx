import { FC } from "react";
import "./buttonStyle.css";

interface Props {
  color: string;
  backGroundColor: string;
  text: string | number;
  shadowClass: string;
}

const ButtonCustomized: FC<Props> = ({
  color,
  backGroundColor,
  text,
  shadowClass,
}) => {
  return (
    <div
      className={`button-section ${shadowClass}`}
      style={{ backgroundColor: `${backGroundColor}`, color: `${color}` }}
    >
      {text}
    </div>
  );
};

export default ButtonCustomized;
