import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../components/molecules";
import "./mainApp.scss";

function MainApp() {
  return (
    <div className="main-app-wrapper">
      <Header />
      <main className="content-wrapper">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainApp;
