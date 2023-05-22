import { FC } from "react";
import "./resultField.css";

interface Props {
  selectedTheme: number;
}

const ResultField: FC<Props> = ({ selectedTheme }) => {
  return (
    <input
      className={`main-section ${
        selectedTheme === 28
          ? "second-theme"
          : selectedTheme === 52
          ? "third-theme"
          : ""
      }`}
      value="0"
      type="number"
      readOnly
    ></input>
  );
};

export default ResultField;
