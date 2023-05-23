import { FC, useState } from "react";
import "./buttonStyle.css";

interface Props {
  color: string;
  backGroundColor: string;
  text: string;
  shadowClass: string;
  valueHandler: (buttonValue: string) => void;
}

const ButtonCustomized: FC<Props> = ({
  color,
  backGroundColor,
  text,
  shadowClass,
  valueHandler,
}) => {
  return (
    <div
      onClick={() => valueHandler(text)}
      className={`button-section ${shadowClass}`}
      style={{ backgroundColor: `${backGroundColor}`, color: `${color}` }}
    >
      {text}
    </div>
  );
};

export default ButtonCustomized;
