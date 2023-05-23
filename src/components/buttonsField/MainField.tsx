import { FC, Fragment } from "react";
import "./mainFIeld.css";
import ButtonCustomized from "../buttons/ButtonCustomized";

interface Props {
  selectedTheme: number;
  inputValue: string;
  setInputValue: (chosenButton: string) => void;
}

const ButtonsField: FC<Props> = ({
  selectedTheme,
  setInputValue,
  inputValue,
}) => {
  const ButtonsArr = [
    "7",
    "8",
    "9",
    "DEL",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "-",
    ".",
    "0",
    "/",
    "*",
  ];

  function calculateExpression(expression: string) {
    try {
      const result = eval(expression);
      return result;
    } catch (error) {
      return "Invalid expression";
    }
  }

  const valueHandler = (buttonValue: string) => {
    if (buttonValue === "DEL") {
      setInputValue(inputValue.slice(0, -1));
    } else if (buttonValue === "RESET") {
      setInputValue("");
    } else if (buttonValue === "=") {
      const result = calculateExpression(inputValue);
      setInputValue(result.toString());
    } else {
      setInputValue(inputValue + buttonValue);
    }
  };

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
      {ButtonsArr.map((element: string, index) => {
        return (
          <Fragment key={index}>
            <ButtonCustomized
              valueHandler={valueHandler}
              inputValue={inputValue}
              setInputValue={setInputValue}
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
        onClick={() => valueHandler("RESET")}
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
        onClick={() => valueHandler("=")}
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
