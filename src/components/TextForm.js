import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnClick = () => {
    // console.log("handle on click " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase..!","success")
  };
  const handleClearText = () => {
    setText("");
    props.showAlert("Text Cleared..!","success")

  };
  const handleOnClickLower = () => {
    // console.log("handle on click " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase..!","success")

  };
  const handleOnChange = (event) => {
    // console.log("handle on change");
    setText(event.target.value);
    
  };
  //   Handling state
  const [text, setText] = useState("Enter text here 1");
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="3"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleOnClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleOnClickLower}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearText}>
          Clear
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>Your text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} charecters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview it here  "}</p>
      </div>
    </>
  );
}
