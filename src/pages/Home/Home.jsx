import { useNavigate } from "react-router-dom";
import { BlogItem, Button, Gap } from "../../components";
import "./home.scss";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button title="Create Blog" onClick={() => navigate("/create-blog")} />
      </div>
      <Gap height={30} />
      <div className="content-wrapper">
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
      <div className="pagination">
        <Button title="Sebelumnya" />
        <Gap width={20} />
        <Button title="Selanjutnya" />
      </div>
      <Gap height={20} />
    </div>
  );
}

export default Home;
