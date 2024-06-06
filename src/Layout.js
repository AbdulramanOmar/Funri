import { Outlet } from "react-router-dom";
import { Navbar , Message , Footer} from "./component";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Message />
      <Footer />
    </div>
  );
};

export default Layout;
