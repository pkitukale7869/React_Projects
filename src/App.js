import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  /**
   * Theme
   */
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#15114e";
      showAlert("Dark mode has Enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has Enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  /**
   * Alert State
   */
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={
              <TextForm
                heading="Props Heading"
                mode={mode}
                showAlert={showAlert}
              />
            } />
          </Routes>
          {/* <About /> */}
          {/* <TextForm heading="Props Heading" mode={mode} showAlert={showAlert} /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
