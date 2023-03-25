import {
  FilterList,
  Menu,
  MoreVert,
  SupervisedUserCircleSharp,
  VerifiedUser,
  Visibility,
} from "@mui/icons-material";
import React, { useState } from "react";

const PopUp2 = () => {
  const [showOptions, setShowOptions] = useState(false);
  const handleClick = () => {
    setShowOptions(!showOptions);
  };

  const [user, setUser] = useState([]);

  return (
    <>
      <button onClick={handleClick}>
        <MoreVert />
      </button>

      {showOptions && (
        <div
          id="dropdownUsers"
          className="z-10 absolute right-[5%] bg-white rounded-lg shadow w-[12%]"
        >
          <ul
            className="h-35 py-2 overflow-y-auto text-gray-700 "
            aria-labelledby="dropdownUsersButton"
          >
            <li>
              <a
                //  href={`/Userprofile/${user.id}`}
                href="/Userprofile/:id"
                className="flex gap-2 items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <Visibility />
                View Details
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex gap-2 items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <VerifiedUser />
                BlackList Users
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex gap-2 items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <SupervisedUserCircleSharp />
                Activate Users
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default PopUp2;
