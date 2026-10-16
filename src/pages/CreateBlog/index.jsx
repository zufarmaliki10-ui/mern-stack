import { useNavigate } from "react-router-dom";
import { Button, Gap, Input, TextArea, Upload } from "../../components";
import "./createBlog.scss";

function CreateBlog() {
  const navigate = useNavigate();
  return (
    <div className="blog-post">
      <p className="title">Create New Blog Post</p>
      <Input label="Judul Blog" placeholder="Masukkan judul blog..." />
      <Upload />
      <TextArea placeholder="Tulis deskripsi disini..." />
      <Gap height={20} />
      <div className="button-action">
        <Button title="Kembali" onClick={() => navigate("/")} />
        <Gap width={20} />
        <Button title="Simpan" onClick={() => navigate("/")} />
      </div>
    </div>
  );
}

export default CreateBlog;
