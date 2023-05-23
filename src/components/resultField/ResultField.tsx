import { FC } from "react";
import "./resultField.css";

interface Props {
  selectedTheme: number;
  inputValue: string;
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
      type="string"
      readOnly
    ></input>
  );
};

export default ResultField;
