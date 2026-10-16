import { useNavigate } from "react-router-dom";
import { RegisterBg } from "../../assets";
import { Gap, Link } from "../../components";
import "./detailBlog.scss";
function DetailBlog() {
  const navigate = useNavigate();
  return (
    <div className="detail-blog-wrapper">
      <img className="img-cover" src={RegisterBg} alt="thumb" />
      <p className="blog-title">Title Blog</p>
      <p className="blog-author">Author - Date Post</p>
      <p className="blog-body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
        accusantium, delectus natus recusandae provident itaque est quaerat nisi
        ipsam velit similique officiis commodi impedit, molestiae, cum nam
        ratione fugit tempore!
      </p>
      <Gap height={20} />
      <Link title="Kembali" onClick={() => navigate("/")} />
    </div>
  );
}

export default DetailBlog;
