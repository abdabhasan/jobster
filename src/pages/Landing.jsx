import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { useNavigate } from "react-router-dom";
const Landing = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby tilde gorpcore williamsburg iPhone keffiyeh, kinfolk
            meditation offal. Deep v normcore marfa before they sold out
            readymade semi
          </p>
          <button
            className="btn btn-hero"
            onClick={() => navigate("/register")}
          >
            login/register
          </button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
