import { useNavigate } from "react-router-dom";
import { RegisterBg } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";
import "./Register.scss";
function Register() {
  const navigate = useNavigate();
  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBg} className="bg-image" />
      </div>
      <div className="right">
        <p className="title">Register</p>
        <Input label="Fullname" placeholder="Fullname" />
        <Gap height={15} />
        <Input label="Email" placeholder="Email" />
        <Gap height={15} />
        <Input label="Password" placeholder="Password" />
        <Gap height={40} />
        <Button title="REGISTER" onClick={() => navigate("/")} />
        <Gap height={100} />
        <Link title="Kembali ke Login" onClick={() => navigate("/login")} />
      </div>
    </div>
  );
}

export default Register;
