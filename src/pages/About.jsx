import Header from "./../components/Header/Header";
import Footer from "./../components/Footer/Footer";

import "./About.css";

const About = () => {
  return (
    <>
      <Header />
      <div className="container">
        <h1>Buddy Writer</h1>
        <p>
          This is an app that allows you to inform about the company products.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default About;
