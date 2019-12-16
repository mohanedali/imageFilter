import React, { useState, useRef } from "react";
import List from "./components/List";
import Wrapper from "./components/Wrapper";
import "./App.css";

function App() {
  const [list] = useState(["All", "Home", "Media", "Classic"]);
  const wrapperRef = useRef();
  const handleClickList = e => {
    const dataType = e.target.dataset.type;
    handleFilterImages(dataType);
  };
  const handleFilterImages = dataType => {
    wrapperRef.current.style.opacity = 0;
    const blocks = wrapperRef.current.querySelectorAll(".blocks");
    blocks.forEach(block => {
      console.log(dataType);
      block.style.display = "none";
      if (block.dataset.type === dataType || dataType === "All") {
        block.style.display = "block";
      }
      wrapperRef.current.style.opacity = 1;
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {list.map((li, i) => (
            <List key={i} li={li} index={i} handleClickList={handleClickList} />
          ))}
        </ul>
        <Wrapper wrapperRef={wrapperRef} />
      </header>
    </div>
  );
}

export default App;
