import { useNavigate } from "react-router-dom";
import "./header.scss";
function Header() {
  const navigate = useNavigate();
  return (
    <div className="header">
      <p className="logo-app">MERN - Blog</p>
      <p className="menu-item" onClick={() => navigate("/login")}>
        Logout
      </p>
    </div>
  );
}

export default Header;
