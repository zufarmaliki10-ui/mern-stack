import { RegisterBg } from "../../assets";
import { Input } from "../../components";
import "./Register.scss";
function Register() {
  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBg} className="bg-image" />
      </div>
      <div className="right">
        <p className="title">Register</p>
        <Input />
        <Input />
        <Input />
      </div>
    </div>
  );
}

export default Register;
