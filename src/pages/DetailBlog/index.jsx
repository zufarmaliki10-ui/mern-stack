import { RegisterBg } from "../../assets";
import "./detailBlog.scss";
function DetailBlog() {
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
    </div>
  );
}

export default DetailBlog;
