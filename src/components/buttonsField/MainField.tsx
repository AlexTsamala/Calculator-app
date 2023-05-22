import { FC, Fragment } from "react";
import "./mainFIeld.css";
import ButtonCustomized from "../buttons/ButtonCustomized";

interface Props {
  selectedTheme: number;
}

const ButtonsField: FC<Props> = ({ selectedTheme }) => {
  const ButtonsArr = [
    7,
    8,
    9,
    "DEL",
    4,
    5,
    6,
    "+",
    1,
    2,
    3,
    "-",
    ".",
    0,
    "/",
    "x",
  ];

  return (
    <div
      className={`buttons-section ${
        selectedTheme === 28
          ? "second-theme"
          : selectedTheme === 52
          ? "third-theme"
          : ""
      }`}
    >
      {ButtonsArr.map((element, index) => {
        return (
          <Fragment key={index}>
            <ButtonCustomized
              color={
                selectedTheme === 28
                  ? "#36362C"
                  : selectedTheme === 52
                  ? "#FFE53D"
                  : ""
              }
              backGroundColor={
                selectedTheme === 28
                  ? "#E5E4E1"
                  : selectedTheme === 52
                  ? "#331C4D"
                  : ""
              }
              text={element}
              shadowClass={
                selectedTheme === 28
                  ? "shadow-style-second"
                  : selectedTheme === 52
                  ? "shadow-style-third"
                  : ""
              }
            />
          </Fragment>
        );
      })}
      <div
        className={`reset-button bottom-buttons ${
          selectedTheme === 28
            ? "reset-button-secondary"
            : selectedTheme === 52
            ? "reset-button-third"
            : ""
        }`}
      >
        RESET
      </div>
      <div
        className={`equal-button bottom-buttons ${
          selectedTheme === 28
            ? "equal-button-secondary"
            : selectedTheme === 52
            ? "equal-button-third"
            : ""
        }`}
      >
        =
      </div>
    </div>
  );
};

export default ButtonsField;
