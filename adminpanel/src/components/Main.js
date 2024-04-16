import React from "react";
import { FaEllipsisV } from "react-icons/fa";
import PieComponent from "./PieComponent";
import { Progress } from "antd";
import Cards from "./Cards";
import Table from "./Table";

const Main = () => {
  return (
    <div className="px-[25px] pt-[25px] bg-[#F8F9FC] pb-[40px]">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl  font-semibold text-blue-900 shadow-md cursor-pointer">
          Dashboard
        </h1>

        <button className="bg-[#2E59D9] h-[32px] rounded-[3px] text-white flex items-center justify-center px-[8px]">
          Generate Report
        </button>
      </div>
      {/* cards */}

      <Cards />
      {/* TAble  */}
      <Table/>

      <div className="flex mt-[22px] w-full gap-[30px]">
        <div className="basis-[55%] border bg-white shadow-md cursor-pointer rounded-[4px]">
          <div className="bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED]">
            <h2 className="text-[#4e73df] text-[16px] leading-[19px] font-bold">
              Projects Overview
            </h2>
            <FaEllipsisV color="gray" className="cursor-pointer" />
          </div>
          <div className="px-[25px] space-y-[15px] py-[15px]">
            <div>
              <h2>Server Migration</h2>
              <Progress percent={30} strokeColor="#E74A3B" />
            </div>
            <div>
              <h2>Sales Tracking</h2>
              <Progress percent={50} status="active" strokeColor="#F6C23E" />
            </div>
            <div>
              <h2>Customer Database</h2>
              <Progress percent={70} status="active" strokeColor="#4E73DF" />
            </div>
            <div>
              <h2>Payout Details</h2>
              <Progress percent={100} strokeColor="#36B9CC" />
            </div>
            <div>
              <h2>Account Setup</h2>
              <Progress percent={50} status="exception" strokeColor="#1CC88A" />
            </div>
          </div>
        </div>
        <div className="basis-[30%] border bg-white shadow-md cursor-pointer rounded-[4px]">
          <div className="bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED]">
            <h2 className="text-[#4e73df] text-[16px] leading-[19px] font-bold">
              Revenue Resources
            </h2>
            <FaEllipsisV color="gray" className="cursor-pointer" />
          </div>
          <div className="pl-[35px]">
            <PieComponent />

            {}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
