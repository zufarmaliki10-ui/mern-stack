import { Outlet } from "react-router-dom";

function MainApp() {
  return (
    <div>
      <p>Header</p>
      <main>
        <Outlet />
      </main>
      <p>Footer</p>
    </div>
  );
}

export default MainApp;
