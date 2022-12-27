import React from "react";
import HeroImage from "../assets/hero.png";
import { MdKeyboardArrowRight } from "react-icons/md";
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
                {" "}
                <MdKeyboardArrowRight size={25} className="ml-1" />{" "}
              </span>
            </button>
          </div>
        </div>
        <div>
          <img src={HeroImage} alt="my profile" className="home-hero" />
        </div>
      </div>
    </div>
  );
};

export default Home;