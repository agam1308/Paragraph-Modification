import { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

function App(props) {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "Grey";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "White";
    }
  };
  return (
    <>
      <Navbar title="Utils" mode={mode} toggleMode={toggleMode} />
      <div className="container">
        <Textform heading="Enter text here" mode={mode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
