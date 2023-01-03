import React from "react";
import { memo } from "react";
import HeroImage from "../assets/hero1.webp";
import { ReactComponent as PortF } from "../icons/PortF.svg";
import "./home.css";
const Home = () => {
  return (
    <div name="home" className="home">
      <div className="home-content">
        <div className="home-left">
          <h2>I'm FrontEnd Developer</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, aut,
            voluptatibus saepe quasi dignissimos sit libero repudiandae,
            delectus illo accusamus numquam excepturi rerum error. Unde ex neque
            nostrum. Cum, architecto.
          </p>

          <div>
            <button className=" portfolio-btn">
              Portfolio
              <span>
                <PortF className="ml-1 fill-white" />
              </span>
            </button>
          </div>
        </div>
        <div >
          <img src={HeroImage} alt="my profile" decoding="async"   className="home-hero" />
          {/* <link rel="preload" as="image" href={HeroImage} className="home-hero" /> */}
        </div>
      </div>
    </div>
  );
};
export default memo(Home);
