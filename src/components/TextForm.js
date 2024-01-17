import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState('');

  const clickHandler = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const clicklowHandler = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const clearHandler = () => {
    let newText = '';
    setText(newText);
  };

  const changeHandler = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={changeHandler}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={clickHandler}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={clicklowHandler}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={clearHandler}>
          Clear Text
        </button>
      </div>
      <div className="container my-3">
        <h1>Summary of Text</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters.
        </p>
        <p>Can be read in {0.008 * text.split(" ").length} minutes. </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
