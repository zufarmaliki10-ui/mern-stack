import "./footer.scss";
import {
  ICDiscord,
  ICEmail,
  ICGithub,
  ICTiktok,
  LogoOmah,
} from "../../../assets";

const Icon = ({ img }) => {
  return (
    <div className="icon-wrapper">
      <img className="icon-image" src={img} alt="icon" />
    </div>
  );
};
function Footer() {
  return (
    <div>
      <div className="footer">
        <div>
          <img className="logo" src={LogoOmah} alt="logo" />
        </div>
        <div className="social-wrapper">
          <Icon img={ICEmail} />
          <Icon img={ICTiktok} />
          <Icon img={ICGithub} />
          <Icon img={ICDiscord} />
        </div>
      </div>
      <div className="copyright">
        <p>Copyright</p>
      </div>
    </div>
  );
}

export default Footer;
