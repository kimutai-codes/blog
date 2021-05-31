import Footer from "./Footer";
import Navbar from "./Navbar";
import styles from "../styles/Home.module.css";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
