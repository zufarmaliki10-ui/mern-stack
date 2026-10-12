import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, MainApp, Register } from "../../pages";
import Home from "../../pages/Home/Home";
import CreateBlog from "../../pages/CreateBlog";
import DetailBlog from "../../pages/DetailBlog";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainApp />}>
          <Route index element={<Home />} />
          <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/detail-blog" element={<DetailBlog />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
