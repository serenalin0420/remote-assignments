import React, { useState, useRef } from "react";
import Nav from "./Nav";
import ContentBox from "./ContentBox";

function App() {
  //heading
  const [heading, setHeading] = useState("Welcome Message");
  const headingChange = () => {
    setHeading("Have a Good Time!");
  };

  //content-box
  const [isVisible, setIsVisible] = useState(false);
  const handleAddBox = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="App">
      <header className="main-header">
        <a className="name-container" href="#">
          <div className="logo-container">
            <svg
              className="logo"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14 2C7.37261 2 2 7.37261 2 14C2 20.6274 7.37261 26 14 26C16.9537 26 19.6581 24.9328 21.7488 23.163L27.2929 28.7071C27.6834 29.0976 28.3166 29.0976 28.7071 28.7071C29.0976 28.3166 29.0976 27.6834 28.7071 27.2929L23.163 21.7488C24.9328 19.6581 26 16.9537 26 14C26 7.37261 20.6274 2 14 2ZM4 14C4 8.47718 8.47718 4 14 4C19.5228 4 24 8.47718 24 14C24 19.5228 19.5228 24 14 24C8.47718 24 4 19.5228 4 14Z"
                fill="#454444"
              />
            </svg>
          </div>
          <p className="name-title">Website Title</p>
        </a>
        <Nav />
      </header>

      <main>
        <section className="banner">
          <h1 className="banner-heading" onClick={headingChange}>
            {heading}
          </h1>
        </section>
        <section className="content">
          <h2 className="content-heading">Section title</h2>
          <div className="content-box">
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
          {/* click to show more boxes */}
          <button className="content-btn" onClick={handleAddBox}>
            Call to Action
          </button>
          <ContentBox isVisible={isVisible} />
        </section>
      </main>
    </div>
  );
}

export default App;
