import Details from "./Details";
import Earnings from "./Earnings";
import Footer from "./Foooter";
import NavBar from "./NavBar";
import Project from "./Project";
import Report from "./Report";
import Revenue from "./Revenue";

const Content = () => {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <NavBar />

        <div className="container-fluid">
          <Report />

          <div className="row">
            <Earnings />

            <Revenue />
          </div>

          <div className="row">
            <Project />

            <Details />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Content;
