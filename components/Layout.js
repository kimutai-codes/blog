import Footer from "./Footer";
import Navbar from "./Navbar";
import styles from "../styles/Home.module.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="mwili">{children}</div>
      <Footer />
      <style jsx>
        {`
          //think this should be in the body
          //should separate body from nav
          //where is the boundary
          .mwili {
            // color: red;
          }
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
