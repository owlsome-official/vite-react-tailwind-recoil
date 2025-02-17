import EasyButton from "components/EasyButton";
import PlainCenterLayout from "layouts/PlainCenterLayout";
import { useNavigate } from "react-router";

const AboutPage = () => {
  const navigate = useNavigate();
  return (
    <PlainCenterLayout>
      <div className="text-h1 text-center font-bold">About Page</div>
      <div className="text-h3 text-center">In Progress...</div>
      <div className="text-p mb-4">Go back to the home.</div>
      <EasyButton />
      <button className="btn-primary btn" onClick={() => navigate("/")}>
        Go Home
      </button>
    </PlainCenterLayout>
  );
};

export default AboutPage;
