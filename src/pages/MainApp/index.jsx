import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../components/molecules";

function MainApp() {
  return (
    <div className="main-app-wrapper">
      <div className="header-wrapper">
        <Header />
      </div>
      <main className="content-wrapper">
        <Outlet />
      </main>
      <div className="footer-wrapper">
        <Footer />
      </div>
    </div>
  );
}

export default MainApp;
