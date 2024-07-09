import React, { useState } from "react";

const ContentBox = ({ isVisible }) => {
  //console.log({ isVisible });
  return (
    <>
      <div className={`content-box ${isVisible ? "" : "hidden"}`}>
        <div className="box box1">
          <p>Content Box 1</p>
        </div>

        <div className="box box2">
          <p>Content Box 2</p>
        </div>

        <div className="box box3">
          <p>Content Box 3</p>
        </div>

        <div className="box box4">
          <p>Content Box 4</p>
        </div>
      </div>
    </>
  );
};

export default ContentBox;
