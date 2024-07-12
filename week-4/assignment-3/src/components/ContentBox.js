import React from "react";

const ContentBox = ({ isVisible, contentBox }) => {
  return (
    <>
      <div className={`content-box ${isVisible ? "" : "hidden"}`}>
        <>{contentBox}</>
      </div>
    </>
  );
};

export default ContentBox;
