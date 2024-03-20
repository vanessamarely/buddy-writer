import SideBar from "../components/SideBard/SideBar";
import TopBar from "../components/TopBar/TopBar";

import "./HomeBuddy.css";

const HomeBuddy = () => {
  return (
    <div className="box">
      <SideBar />
      <div className="right-box">

        <TopBar />
        <div className="home-box">
          <h1> Welcome!</h1>
          <p>
            This is a documentation generator for your code. You can use it to
            generate a documentation for your code. It is very easy to use. Just
            click on the "Generate Documentation" link on the left and follow the
            instructions.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default HomeBuddy;
