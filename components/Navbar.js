import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link href="/">
            <a>🌱</a>
          </Link>
        </div>
        <div className="toggle-button">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className="navbar-links">
          <ul>
            <li>
              <Link href="#">
                <a>Portfolio</a>
              </Link>
            </li>

            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>

            <li>
              <Link href="/blog">
                <a>Blog</a>
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
        `}
      </style>
    </>
  );
};

export default Navbar;
