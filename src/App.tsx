import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import ResultField from "./components/resultField/ResultField";
import ButtonsField from "./components/buttonsField/MainField";

function App() {
  const [selectedTheme, setSelectedThem] = useState<number>(3);

  return (
    <div
      className={`main-container ${
        selectedTheme === 28
          ? "theme-second"
          : selectedTheme === 52
          ? "theme-third"
          : ""
      }`}
    >
      <Header setSelectedThem={setSelectedThem} selectedTheme={selectedTheme} />
      <ResultField selectedTheme={selectedTheme} />
      <ButtonsField selectedTheme={selectedTheme} />
    </div>
  );
}

export default App;
