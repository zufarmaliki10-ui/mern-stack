import { useNavigate } from "react-router-dom";
import { LoginBg } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";
function Login() {
  const navigate = useNavigate();
  return (
    <div className="main-page">
      <div className="left">
        <img src={LoginBg} className="bg-image" />
      </div>
      <div className="right">
        <p className="title">Login</p>
        <Input label="Email" placeholder="Email" />
        <Gap height={15} />
        <Input label="Password" placeholder="Password" />
        <Gap height={40} />
        <Button title="LOGIN" onClick={() => navigate("/")} />
        <Gap height={100} />
        <Link title="Buat Akun" onClick={() => navigate("/register")} />
      </div>
    </div>
  );
}

export default Login;
