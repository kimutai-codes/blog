import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
const Navbar = () => {
  return (
    <>
      <nav>
        <Link href="/">
          <a className="logo">
            {/* <Image src="/kimutai.png" width="80" height="60" /> */}
            KIMUTAI
          </a>
        </Link>

        <Link href="#">
          <a>Portfolio</a>
        </Link>

        <Link href="/about">
          <a>About</a>
        </Link>

        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
