import { LoginBg } from "../../../assets";
import "./upload.scss";
function Upload() {
  return (
    <div className="upload">
      <img className="preview" src={LoginBg} alt="preview" />
      <input type="file" />
    </div>
  );
}

export default Upload;
