import { Nav } from "../../components/nav";
import { Footer } from "../../components/footer";
import { InfoPost } from "../../components/infoPost";
import { useParams } from "react-router-dom";


export const InfoPostPage = () => {
  const params = useParams();
  return (
    <div className="container">
      <Nav />
      <InfoPost id={params.id} />
      <Footer />
    </div>
  );
};
