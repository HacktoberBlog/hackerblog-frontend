import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import { MyProvider } from "../context/MyContext";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <MyProvider>
      <div className="layout">
        <TopBar />
        <main className="main-content">{children}</main>
        <Footer />
      </div>
    </MyProvider>
  );
};

export default Layout;
