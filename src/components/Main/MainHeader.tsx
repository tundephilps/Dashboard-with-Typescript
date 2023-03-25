import { Star, StarOutline } from "@mui/icons-material";
import React from "react";

const MainHeader = () => {
  return (
    <div className="sm:px-7 sm:pt-7 px-4 pt-4 flex flex-col w-full border-b  bg-white dark:text-white  sticky top-0">
      <div className="flex w-full items-center">
        <div className="flex flex-row items-center text-3xl text-blue-900 ">
          <img
            src="https://assets.codepen.io/344846/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1582611188&width=512"
            className="w-12 mr-4 rounded-full"
            alt="profile"
          />
          <div className="flex flex-col gap-2">
            Grace Effiom <br />
            <div>
              <p className="text-blue-900 text-[17px]">eydh7w2277</p>
            </div>
          </div>
          <div
            style={{
              borderLeft: "3px solid grey",
              height: "50px",
              marginLeft: "10px",
            }}
          ></div>
        </div>
        <div className=" ml-3 text-blue-900 lg:flex hidden">
          <h5>User Tier</h5>

          <span className="text-yellow-600">
            {" "}
            <Star /> <StarOutline /> <StarOutline />
          </span>
        </div>
        <div
          style={{
            borderLeft: "3px solid grey",
            height: "50px",
            marginLeft: "10px",
          }}
        ></div>

        <div className=" ml-3 text-blue-900 font-medium">
          <h5>N200,000.00</h5>

          <span>19927374362/ Providus Bank</span>
        </div>

        <div className="ml-auto sm:flex hidden items-center justify-end"></div>
      </div>
      <div className="flex items-center justify-center space-x-[2%] sm:mt-7 mt-4 w-full">
        <a
          href="#"
          className="px-[1%] border-b-4 border-cyan-500 text-cyan-500  pb-1.5 "
        >
          General Details
        </a>
        <a
          href="#"
          className="px-12 border-b-2 border-transparent text-gray-600 dark:text-gray-400 pb-1.5"
        >
          Documents
        </a>
        <a
          href="#"
          className="px-12 border-b-2 border-transparent text-gray-600 dark:text-gray-400 pb-1.5 sm:block hidden"
        >
          Bank Details
        </a>
        <a
          href="#"
          className="px-12 border-b-2 border-transparent text-gray-600 dark:text-gray-400 pb-1.5 sm:block hidden"
        >
          Loans
        </a>
        <a
          href="#"
          className="px-12 border-b-2 border-transparent text-gray-600 dark:text-gray-400 pb-1.5 sm:block hidden"
        >
          Savings
        </a>
        <a
          href="#"
          className="px-12 border-b-2 border-transparent text-gray-600 dark:text-gray-400 pb-1.5 sm:block hidden"
        >
          Apps and Systems
        </a>
      </div>
    </div>
  );
};

export default MainHeader;
