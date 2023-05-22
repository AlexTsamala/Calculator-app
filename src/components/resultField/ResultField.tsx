import { FC } from "react";
import "./resultField.css";

interface Props {
  selectedTheme: number;
  inputValue: number | string;
}

const ResultField: FC<Props> = ({ selectedTheme, inputValue }) => {
  return (
    <input
      className={`main-section ${
        selectedTheme === 28
          ? "second-theme"
          : selectedTheme === 52
          ? "third-theme"
          : ""
      }`}
      value={inputValue}
      placeholder="0"
      type="number"
      readOnly
    ></input>
  );
};

export default ResultField;
