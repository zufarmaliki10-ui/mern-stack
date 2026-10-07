import { LoginBg } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";
function Login() {
  return (
    <div className="main-page">
      <div className="left">
        <img src={LoginBg} className="bg-image" />
      </div>
      <div className="right">
        <p className="title"></p>
        <Input label="Email" placeholder="Email" />
        <Gap height={15} />
        <Input label="Password" placeholder="Password" />
        <Gap height={40} />
        <Button title="LOGIN" />
        <Gap height={100} />
        <Link title="Buat Akun" />
      </div>
    </div>
  );
}

export default Login;
