import { useNavigate } from "react-router-dom";
import { RegisterBg } from "../../../assets";
import { Link } from "../../atoms";
import "./blogItem.scss";

function BlogItem() {
  const navigate = useNavigate();
  return (
    <div className="blog-item">
      <img className="image-thumb" src={RegisterBg} alt="post" />
      <div className="content-detail">
        <p className="title">Title Blog</p>
        <p className="author">Author - Date Post</p>
        <p className="body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
          accusantium, delectus natus recusandae provident itaque est quaerat
          nisi ipsam velit similique officiis commodi impedit, molestiae, cum
          nam ratione fugit tempore!
        </p>
        <Link
          title="Baca selengkapnya"
          onClick={() => navigate("/detail-blog")}
        />
      </div>
    </div>
  );
}

export default BlogItem;
