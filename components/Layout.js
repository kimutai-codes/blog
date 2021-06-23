import Footer from "./Footer";
import Navbar from "./Navbar";
import styles from "../styles/Home.module.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      {children}
      <Footer />
      <style jsx>
        {`
          @media screen and (min-width: 700px) {
            .layout {
              max-width: 65%;
              margin: 0 auto;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Layout;
