import React from "react";

const ContentBox = ({ isVisible }) => {
  const boxes = [1, 2, 3, 4];
  const contentBox = boxes.map((box) => (
    <div className="box">
      <p>Content Box {box}</p>
    </div>
  ));

  return (
    <>
      <div className={`content-box ${isVisible ? "" : "hidden"}`}>
        <>{contentBox}</>
      </div>
    </>
  );
};

export default ContentBox;
