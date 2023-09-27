import React from "react";
import { useState } from "react";

export default function Form() {
  const [PrototypeForm, setPrototypeForm] = useState({
    key1: "Barbara",
    key2: "Hepworth",
    key3: "bhepworth@react.com",
    key4: "love cats",
  });

  const formStyle = {
    color: "blue",
    backgroundColor: "lightgray",
    padding: "15px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  const inputStyle = {
    margin: "5px",
  };

  return (
    <form style={formStyle}>
      <label>
        key1:
        <input
          style={inputStyle}
          value={PrototypeForm.key1}
          onChange={(event) => {
            setPrototypeForm({
              ...PrototypeForm,
              key1: event.target.value,
            });
          }}
        />
      </label>
      <label>
        key2:
        <input
          style={inputStyle}
          value={PrototypeForm.key2}
          onChange={(event) => {
            setPrototypeForm({
              ...PrototypeForm,
              key2: event.target.value,
            });
          }}
        />
      </label>
      <label>
        key3:
        <input
          style={inputStyle}
          value={PrototypeForm.key3}
          onChange={(event) => {
            setPrototypeForm({
              ...PrototypeForm,
              key3: event.target.value,
            });
          }}
        />
      </label>
      <label>
        key4:
        <input
          style={inputStyle}
          value={PrototypeForm.key4}
          onChange={(event) => {
            setPrototypeForm({
              ...PrototypeForm,
              key4: event.target.value,
            });
          }}
        />
      </label>
      <p>
        {PrototypeForm.key1} {PrototypeForm.key2} {PrototypeForm.key3}{" "}
        {PrototypeForm.key4}
      </p>
    </form>
  );
}

