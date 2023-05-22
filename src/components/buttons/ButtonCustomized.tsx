import { FC, useState } from "react";
import "./buttonStyle.css";

interface Props {
  color: string;
  backGroundColor: string;
  text: string;
  shadowClass: string;
  setInputValue: (chosenButton: string) => void;
  inputValue: string;
}

const ButtonCustomized: FC<Props> = ({
  color,
  backGroundColor,
  text,
  shadowClass,
  setInputValue,
  inputValue,
}) => {
  const [secondInput, setSecondInput] = useState("");

  const valueHandler = (buttonValue: string) => {
    if (buttonValue === "DEL") {
      setInputValue(inputValue.slice(0, -1));
    } else if (buttonValue === "-" && secondInput.length > 0) {
      const result = (Number(inputValue) - Number(buttonValue)).toString();
      setInputValue(result);
    } else if (buttonValue === "+" && secondInput.length > 0) {
      const result = (Number(inputValue) + Number(buttonValue)).toString();
      setInputValue(result);
    } else if (buttonValue === "x" && secondInput.length > 0) {
      const result = (Number(inputValue) * Number(buttonValue)).toString();
      setInputValue(result);
    } else if (buttonValue === "/" && secondInput.length > 0) {
      const result = (Number(inputValue) / Number(buttonValue)).toString();
      setInputValue(result);
    } else {
      setInputValue(inputValue + buttonValue);
    }
  };

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
