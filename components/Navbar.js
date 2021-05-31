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
            {/* <Image src="/images/growth.png" width="60" height="40" /> */}
            🌱
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

        <Link href="https://twitter.com/kimutai_io" passHref={true}>
          <a>Social</a>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
