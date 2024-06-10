import { Navbar } from "../../components/Navbar";
import { InfoPost } from "../../components/InfoPost";
import { Footer } from "../../components/Footer";
import { useParams } from "react-router-dom";
import "../../styles/variables.css";

export const InfoPostPage = () => {
  const params = useParams();
  return (
    <div>
      <Navbar />
      <InfoPost id={params.id} />
      <Footer />
    </div>
  );
};
