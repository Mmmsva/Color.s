import React, { useState, useeffect, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./App.css";

export default function App() {
  const colors = [
    "#9253a1",
    "#2dc5f4",
    "#f063a4",
    "#fc3321",
    "#f16164",
    "#70327e",
    "#a42963",
    "#0c6a88",
    "#f89e4f",
    "#ec015a"
  ];

  const [background, SetBackground] = useState("#071415");
  const [current, setCurrent] = useState(null);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrent(null );
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, [current]);

  return (
    <div className="App" style={{ background: background }}>
      <h1>{current != null ? "copied : "  +   current : ""  }</h1>
      <div className="container">
       
        {colors.map((color, index) => (
          <div key={index} className="card">
            <div
              style={{
                background: color,
                filter: "brightness(85%)",
                boxShadow: color === background ? "0 0 5px #000" : ""
              }}
              className="box"
              onClick={() => SetBackground(color)}
            >
              <CopyToClipboard text={`color: ${color};`}>
                <p
                  style={{ color: color === background ? "#fff" : color }}
                  onClick={() => setCurrent(color)}
                >
                  {color}
                </p>
              </CopyToClipboard>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
