import {
  MoreVert,
  SupervisedUserCircleSharp,
  VerifiedUser,
  Visibility,
} from "@mui/icons-material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const PopUp2 = ({ user }) => {
  //Conditional Rendering Menu List Onclick of an Icon
  const [showOptions, setShowOptions] = useState(false);
  const handleClick = () => {
    setShowOptions(!showOptions);
  };

  const navigate = useNavigate();

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
              <Link to={`users/${user.id}`} className="text-decoration-none">
                <a className="flex gap-2 items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  <Visibility />
                  View Details
                </a>
              </Link>
            </li>
            <li>
              <a
                href=""
                className="flex gap-2 items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <VerifiedUser />
                BlackList Users
              </a>
            </li>
            <li>
              <a
                href=""
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
