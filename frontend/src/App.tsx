import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [code, setCode] = useState("");
  return (
    <div id="App">
      <textarea
        onInput={(e) => setCode(e.target.value)}
        value={code}
      ></textarea>
      <code>{code}</code>
    </div>
  );
}

export default App;
