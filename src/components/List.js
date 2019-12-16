import React from "react";

function List({ li, handleClickList }) {
  return (
    <>
      <li data-type={li} onClick={handleClickList}>
        {li}
      </li>
    </>
  );
}

export default List;
