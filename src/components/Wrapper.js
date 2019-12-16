import React from "react";
import data from "./Data";

function Wrapper({ wrapperRef }) {
  return (
    <div className="blocks-wrapper" ref={wrapperRef}>
      {data.map((block, i) => (
        <img
          key={i}
          src={block.img}
          data-type={block.dataType}
          alt="img"
          className="blocks"
        />
      ))}
    </div>
  );
}

export default Wrapper;
