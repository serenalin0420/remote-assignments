import React from "react";

function Counter({ id, count, addCount }) {
  //console.log(id);
  return (
    <div className="Counter">
      <button onClick={() => addCount(id, 1)}>+1</button>
      <p>{count}</p>
    </div>
  );
}

export default Counter;
