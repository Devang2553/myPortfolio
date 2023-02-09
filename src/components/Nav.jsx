import React from "react";
import "./nav.css";
import { ReactComponent as Ui } from "../icons/Ui.svg";
import { ReactComponent as Sc } from "../icons/Sc.svg";
import { ReactComponent as Search } from "../icons/Search.svg";
import { ReactComponent as Marketing } from "../icons/marketing.svg";

const Nav = () => {
  return (
    <div className="Aboutme " id="about">
      <div className="max-w-screen-lg mx-auto justify-evenly">
      <div className="flex flex-col  ">
        <p className="title">About me</p>
        {/* <div className="headd">Who am i?</div>
        <div className="paragrap">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, necessitatibus.
          </p>
        </div> */}
      </div>
      <div className="boxes flex justify-evenly pt-14 flex-wrap ">
        <div className="flex flex-col ">
          <div className="box h-56 w-56 bg-gray-600 bg-opacity-50 rounded-md flex justify-center items-center  flex-col hover:h-60 hover:w-60 shadow-md shadow-sky-400 hover:scale-105 duration-500   ">
            <Ui className=" fill-blue-300 opacity-60" />
            <p className="text-xl pt-2">UI/UX Design</p>
          </div>
          <div className="pt-6">
          <h2 className="text-center text-blue-300 text-5xl">4 +</h2>
          <h2 className="text-center text-2xl pt-2">Managment</h2>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="box h-56 w-56 bg-gray-600 bg-opacity-50 rounded-md flex justify-center items-center  flex-col hover:h-60 hover:w-60 shadow-md shadow-sky-400 hover:scale-105 duration-500   ">
            <Sc className=" fill-blue-300 opacity-60 " />
            <p className="text-xl pt-2">Web Development</p>
          </div>
          <div className="pt-6">
          <h2 className="text-center text-blue-300 text-5xl">4 +</h2>
          <h2 className="text-center text-2xl pt-2">Managment</h2>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="box h-56 w-56 bg-gray-600 bg-opacity-50 rounded-md flex justify-center items-center  flex-col hover:h-60 hover:w-60 shadow-md shadow-sky-400 hover:scale-105 duration-500   ">
            <Search className=" fill-blue-300 opacity-60" />
            <p className="text-xl pt-2">Web Search</p>
          </div>
          <div className="pt-6">
          <h2 className="text-center text-blue-300 text-5xl">4 +</h2>
          <h2 className="text-center text-2xl pt-2">Managment</h2>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="box h-56 w-56 bg-gray-600 bg-opacity-50 rounded-md flex justify-center items-center  flex-col hover:h-60 hover:w-60 shadow-md shadow-sky-400 hover:scale-105 duration-500    ">
            <Marketing className=" fill-blue-300 opacity-60" />
            <p className="text-xl pt-2">Marketing</p>
          </div>
          <div className="pt-6">
          <h2 className="text-center text-blue-300 text-5xl">4 +</h2>
          <h2 className="text-center text-2xl pt-2">Managment</h2>
          </div>
        </div>
      </div>
      {/* <div className='numbers'></div> */}
    </div>
      
    </div>
  );
};

export default Nav;
