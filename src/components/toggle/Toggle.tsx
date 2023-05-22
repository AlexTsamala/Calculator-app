import { FC } from "react";
import "./toggle.css";

interface Props {
  selectedTheme: number;
  setSelectedThem: (selectedNumber: number) => void;
}

const ToggleComponent: FC<Props> = ({ selectedTheme, setSelectedThem }) => {
  const toggleNumbers = [1, 2, 3];

  const handleOptionChange = () => {
    if (selectedTheme === 3) {
      setSelectedThem(28);
    } else if (selectedTheme === 28) {
      setSelectedThem(52);
    } else {
      setSelectedThem(3);
    }
  };

  return (
    <div>
      <div className="number-section">
        {toggleNumbers.map((number, index) => {
          return (
            <span
              key={index}
              className={`toggle-number ${
                selectedTheme === 28
                  ? "number-theme-second"
                  : selectedTheme === 52
                  ? "number-theme-third"
                  : ""
              }`}
            >
              {number}
            </span>
          );
        })}
      </div>
      <div
        onClick={handleOptionChange}
        className={`ball-area ${
          selectedTheme === 28
            ? "ball-area-theme-II"
            : selectedTheme === 52
            ? "ball-area-theme-III"
            : ""
        }`}
      >
        <div
          style={{ left: `${selectedTheme}px` }}
          className={`ball ${
            selectedTheme === 28
              ? "second-theme-ball"
              : selectedTheme === 52
              ? "third-theme-ball"
              : ""
          }`}
        ></div>
      </div>
    </div>
  );
};

export default ToggleComponent;
