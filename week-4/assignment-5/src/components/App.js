import React, { useState } from "react";
import Counter from "./Counter";

function App() {
  const [btns, setBtns] = useState([
    { id: 1, count: 0 },
    { id: 2, count: 0 },
    { id: 3, count: 0 },
  ]);

  //add 1 button
  const handleAddBtn = () => {
    setBtns((prevBtns) => [...prevBtns, { id: btns.length++, count: 0 }]);
  };

  //add one 接收counter傳回來的值(id為counter click事件 btn.id in app.js)
  const handleAddCount = (id, delta) => {
    setBtns((prevBtns) =>
      prevBtns.map((btn) => {
        if (btn.id === id) {
          return {
            id: btn.id,
            count: btn.count + delta,
          };
        }
        return btn;
      })
    );
  };
  //add all
  const handleAddAllCount = () => {
    setBtns((prevBtns) =>
      prevBtns.map((btn) => {
        return { id: btn.id, count: btn.count + 1 };
      })
    );
  };

  return (
    <div className="App">
      <h1> Implement Counter </h1>
      <button className="add-all" onClick={handleAddAllCount}>
        All +1
      </button>
      {btns.map((btn) => (
        <Counter
          key={btn.id.toString()}
          id={btn.id}
          count={btn.count}
          addCount={handleAddCount}
        />
      ))}
      <button className="add-one" onClick={handleAddBtn}>
        Add a Counter
      </button>
    </div>
  );
}

export default App;
