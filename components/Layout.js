// import styles from "/styles/Shared.module.css";
import Header from "./Header";

const Layout = ({ children }) => (
  <>
    <Header />
    <main className="w-full items-center justify-center flex">{children}</main>
  </>
);

export default Layout;
