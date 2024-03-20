import Header from "./../components/Header/Header";
import Footer from "./../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="landing">
        <div className="landing__content">
          <h1>Stay updated with your technical documentation!</h1>
          <button onClick={() => navigate("/register")} type="button" className="landing__button-register">
            Register
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
