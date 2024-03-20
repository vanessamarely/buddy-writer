import SideBar from "../components/SideBard/SideBar";
import GenerateDocumentation from "../components/GenerateDocumentation/GenerateDocumentation";
import TopBar from "../components/TopBar/TopBar";

import "./Documentation.css";

const Documentation = () => {
  return (
    <div className="box">
      <SideBar />
      <div className="right-box">
        <TopBar />
        <GenerateDocumentation />
      </div>
    </div>
  );
};

export default Documentation;
