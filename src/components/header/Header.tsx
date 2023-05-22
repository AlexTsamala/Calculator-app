import { FC } from "react";
import ToggleComponent from "../toggle/Toggle";
import "./header.css";

interface Props {
  selectedTheme: number;
  setSelectedThem: (selectedNumber: number) => void;
}

const Header: FC<Props> = ({ selectedTheme, setSelectedThem }) => {
  return (
    <div className="container-header">
      <h1
        className={`calc-header ${
          selectedTheme === 28
            ? "number-theme-second"
            : selectedTheme === 52
            ? "number-theme-third"
            : ""
        }`}
      >
        calc
      </h1>
      <div className="toggle-section">
        <span
          className={`theme ${
            selectedTheme === 28
              ? "number-theme-second"
              : selectedTheme === 52
              ? "number-theme-third"
              : ""
          }`}
        >
          THEME
        </span>
        <ToggleComponent
          selectedTheme={selectedTheme}
          setSelectedThem={setSelectedThem}
        />
      </div>
    </div>
  );
};

export default Header;
