import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";
const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const onClickHandler = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link href="/">
            <a>
              <Image src="/images/growth.png" width="30" height="30" />
            </a>
          </Link>
        </div>
        <div className="toggle-button" onClick={onClickHandler}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div
          className={`navbar-links ${isActive ? "navbar-links-active" : ""}`}
        >
          <ul>
            {/* <li> */}
            {/*   <Link href="#"> */}
            {/*     <a>Portfolio</a> */}
            {/*   </Link> */}
            {/* </li> */}

            {/* <li> */}
            {/*   <Link href="/about"> */}
            {/*     <a>About</a> */}
            {/*   </Link> */}
            {/* </li> */}

            <li>
              <Link href="/blog">
                <a>Notes ✍🏾</a>
              </Link>
            </li>

            <li>
              <Link href="https://twitter.com/kimutai_io" passHref={true}>
                <a>Social</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <style jsx>
        {`
          nav {
            margin: 20px auto 40px auto;
            display: flex;
            // flex-direction: row;
            // justify-content: space-between;
            // // align-items: flex-end;
          }

          .navbar-links ul {
            margin: 0;
            padding: 0;
            display: flex;
          }

          .navbar-links li {
            margin-left: 12px;
            color: #a6accd;
            font-weight: 700;
          }

          nav a:hover {
            color: #82aaff;
            border-bottom: 1px #82aaff solid;
          }
          .logo {
            margin-right: auto;
            align-items: flex-end;
          }
          .toggle-button {
            position: absolute;
            top: 0.75rem;
            right: 1rem;
            display: none;
            flex-direction: column;
            justify-content: space-between;
            width: 30px;
            height: 21px;
          }
          .toggle-button .bar {
            height: 3px;
            width: 100%;
            background-color: white;
          }

          .navbar-links ul {
            list-style-type: none;
          }

          @media (max-width: 700px) {
            .logo {
              /* margin-right: 5px; */
              max-width: auto;
              max-height: auto;
            }
            .toggle-button {
              display: flex;
            }
            .navbar-links {
              width: 100%;
              display: none;
            }
            nav {
              max-width: 95%;
              margin: 0 auto;
              flex-direction: column;
              align-items: flex-start;
            }
            .navbar-links ul {
              list-style-type: none;
              flex-direction: column;
              width: 100%;
            }
            .navbar-links li {
              text-align: center;
            }
            .navbar-links-active {
              display: flex;
            }
          }
        `}
      </style>
    </>
  );
};

export default Navbar;
