import {
  Assessment,
  Cached,
  Compress,
  ControlPoint,
  CorporateFare,
  CreditScore,
  Dashboard,
  Face,
  Flag,
  Inventory2,
  KebabDining,
  Lan,
  LocalOffer,
  Login,
  People,
  Report,
  Roofing,
  Savings,
  Security,
  SupportAgent,
  TaskAlt,
  Terminal,
  WbIridescent,
} from "@mui/icons-material";
import React, { useState } from "react";

function SideBar() {
  //State to make the Sidebar button slide in and out
  const [open, setOpen] = useState(true);

  //List of Items on the menu bar and there Icons respectively mapped over the sidebar menu
  const menuList = [
    { title: <h6>Switch Organization</h6>, icon: <CorporateFare /> },

    { title: "Dashboard", icon: <Dashboard />, gap: true },

    { title: <p>CUSTOMERS</p>, gap: true },
    { title: "Users", icon: <People /> },
    { title: "Guarrantor ", icon: <Face /> },
    { title: "Loan", icon: <CreditScore /> },
    { title: "Decision Models", icon: <Terminal /> },
    { title: "Savings", icon: <Savings /> },
    { title: "Loan Requests", icon: <Cached /> },

    { title: "WhiteList", icon: <WbIridescent /> },
    { title: "Karma", icon: <KebabDining /> },

    { title: <p>BUSINESSES</p>, gap: true },
    { title: "Organization", icon: <Roofing /> },
    { title: "Loan Products", icon: <Lan /> },
    { title: "Savings Product", icon: <Security /> },
    { title: "Fees and Charges", icon: <TaskAlt /> },
    { title: "Transactions", icon: <Assessment /> },
    { title: "Services", icon: <SupportAgent /> },
    { title: "Service Account", icon: <Inventory2 /> },
    { title: "Settlements", icon: <Flag /> },
    { title: "Reports", icon: <Report /> },

    { title: <p>SETTINGS</p>, gap: true },
    { title: "Prefrence", icon: <Compress /> },
    { title: "Fees and Pricing", icon: <LocalOffer /> },

    { title: "Audit Logs", icon: <Login /> },
    { gap: true },
  ];
  return (
    <div
      className={`${
        open ? "w-72" : "w-20"
      } h-[100%] transition-all duration-500 relative  bg-white font-normal text-blue-900 gap-1`}
    >
      <ControlPoint
        onClick={() => setOpen(!open)}
        className={`w-[20px] absolute 
              -right-3 border-2 rounded-full transition-all duration-500
               border-dark-purple bg-dark-purple ${!open && "rotate-180"} `}
      />
      <div className="flex gap-2"></div>

      <ul className="mt-7 ">
        {menuList.map((item) => (
          <li
            className={`flex gap-2 px-3 items-center hover:border-l-4  border-blue-900  py-1 transition cursor-pointer group hover:bg-gray-100 hover:text-gray-900
              
                      ${!open && "justify-center"}
                      ${item.gap ? "mt-9" : "mt-2"} `}
          >
            {item.icon}
            {open ? (
              <span className=" text-blue-900 group-hover:font-bold">
                {item.title}
              </span>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
