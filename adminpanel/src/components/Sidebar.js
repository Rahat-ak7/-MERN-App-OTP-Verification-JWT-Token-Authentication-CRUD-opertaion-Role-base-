import React from "react";
import Foodies from "../assets/foodies.png";
import { Link } from "react-router-dom";

import {
  FaTachometerAlt,
  FaRegSun,
  FaWrench,
  FaStickyNote,
  FaRegChartBar,
  FaRegCalendarAlt,
  FaChevronRight,
  FaChevronLeft,
  FaBolt,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="bg-[#4E73DF] px-[25px] h-screen max-h-screen">
      <div className="px-[15px] py-[30px] flex items-center justify-center border-b-[1px] border-[#EDEDED]/[0.3]">
        <img className="rounded-full" src={Foodies} alt="Your Logo" />
      </div>
      <div className="flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3] cursor-pointer">
        <FaTachometerAlt color="white" />
        <p className="text-[14px] leading-[20px] font-bold text-white">
          Dashboard
        </p>
      </div>
      <div className="pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]">
        <p className="text-[10px] font-extrabold leading-[16px] text-white/[0.4]">
          {" "}
          INTERFACE
        </p>
        <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
          <div className="flex  gap-[10px]">
            <Link to="/clientprofile">
              <FaRegSun color="white" />
              <p className="text-[14px] leading-[20px] font-normal text-white">
                Client Profile
              </p>
            </Link>
          </div>
          <FaChevronRight color="white" />
        </div>
        <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
          <div className="flex items-center gap-[10px]">
            <Link to="/utilite">
              <FaWrench color="white" />
              <p className="text-[14px] leading-[20px] font-normal text-white">
                Utilities
              </p>
            </Link>
          </div>
          <FaChevronRight color="white" />
        </div>
      </div>
      <div className="pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]">
        <p className="text-[10px] font-extrabold leading-[16px] text-white/[0.4]">
          ADDONS
        </p>
        <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
          <div className="flex items-center gap-[10px]">
            <Link to="/page">
              <FaStickyNote color="white" />
              <p className="text-[14px] leading-[20px] font-normal text-white">
                Pages
              </p>
            </Link>
          </div>
          <FaChevronRight color="white" />
        </div>
        <div className="flex items-center gap-[10px] py-[15px]  cursor-pointer">
          <Link to="/chart">
            <FaRegChartBar color="white" />
            <p className="text-[14px] leading-[20px] font-normal text-white">
              Charts
            </p>
          </Link>
        </div>
        <div className="flex items-center gap-[10px] py-[15px] cursor-pointer">
          <Link to="/table">
            <FaRegCalendarAlt color="white" />
            <p className="text-[14px] leading-[20px] font-normal text-white">
              Tables
            </p>
          </Link>
        </div>
      </div>
      {/* <div className="pt-[15px]">
        <div className="flex items-center justify-center">
          <div className="h-[40px] w-[40px] bg-[#3C5EC1] rounded-full flex items-center justify-center cursor-pointer">
            <FaChevronLeft className={`color="white  `} />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Sidebar;
