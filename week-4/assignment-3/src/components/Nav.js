import React, { useState } from "react";

function Nav() {
  //hamburger menu
  const [menuOpen, setMenuOpen] = useState(false);
  const handdleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <nav className="navbar">
        <button onClick={handdleMenu} className="icon-btn-container">
          {menuOpen ? (
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.7071 8.70711C25.0976 8.31658 25.0976 7.68342 24.7071 7.29289C24.3166 6.90237 23.6834 6.90237 23.2929 7.29289L16 14.5858L8.70711 7.29289C8.31658 6.90237 7.68342 6.90237 7.29289 7.29289C6.90237 7.68342 6.90237 8.31658 7.29289 8.70711L14.5858 16L7.29289 23.2929C6.90237 23.6834 6.90237 24.3166 7.29289 24.7071C7.68342 25.0976 8.31658 25.0976 8.70711 24.7071L16 17.4142L23.2929 24.7071C23.6834 25.0976 24.3166 25.0976 24.7071 24.7071C25.0976 24.3166 25.0976 23.6834 24.7071 23.2929L17.4142 16L24.7071 8.70711Z"
                fill="#454444"
              />
            </svg>
          ) : (
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M28 7C28 7.55228 27.5523 8 27 8H5C4.44772 8 4 7.55228 4 7C4 6.44772 4.44772 6 5 6H27C27.5523 6 28 6.44772 28 7ZM28 16C28 16.5523 27.5523 17 27 17H5C4.44772 17 4 16.5523 4 16C4 15.4477 4.44772 15 5 15H27C27.5523 15 28 15.4477 28 16ZM27 26C27.5523 26 28 25.5523 28 25C28 24.4477 27.5523 24 27 24H5C4.44772 24 4 24.4477 4 25C4 25.5523 4.44772 26 5 26H27Z"
                fill="#454444"
              />
            </svg>
          )}
        </button>

        <ul className="menu-container">
          <li className="menu-item">
            <a href="#">Item1</a>
          </li>
          <li className="menu-item">
            <a href="#">Item2</a>
          </li>
          <li className="menu-item">
            <a href="#">Item3</a>
          </li>
          <li className="menu-item">
            <a href="#">Item4</a>
          </li>
        </ul>
      </nav>

      <div className={`side-menu ${menuOpen ? "open" : ""}`} id="side-menu">
        <ul className="floating-side-menu">
          <li className="side-menu-item">
            <a href="#">Item1</a>
          </li>
          <li className="side-menu-item">
            <a href="#">Item2</a>
          </li>
          <li className="side-menu-item">
            <a href="#">Item3</a>
          </li>
          <li className="side-menu-item">
            <a href="#">Item4</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Nav;
