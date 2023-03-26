//Replace fetch with axios

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PopUp from "./PopUp";
import PopUp2 from "./PopUp2";
import Pagination from "react-js-pagination";

import axios from "axios";

interface User {
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
  lastActiveDate: string;
  id: number;
}

export const UsersTable = (props: any) => {
  //State for rendering List of Users from the API
  const [users, setUsers] = useState<User[]>([]);

  //State that takes care of Pagination
  const [activePage, setActivePage] = useState<number>(1);

  //State that Works on the Page Lazy loading while making API call
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const itemsPerPage = 10;
  //Mavigation to another route
  const navigate = useNavigate();

  useEffect(() => {
    //want to wait 5 seconds before the Usedata renders on the component
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    //Api call using Axios that brings in a response and returns as a promise
    axios
      .get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
      .then((response) => setUsers(response.data));
  }, []);

  //a function that displays to show if the user is active, inactive or blacklisted based on the paramters and data
  //avaliable on the API with the current Date and Active date

  const getButtonText = (date: string) => {
    const currentDate = new Date();
    const lastActiveDate = new Date(date);
    const diff = Math.abs(currentDate.getTime() - lastActiveDate.getTime());
    const diffYears = Math.floor(diff / (1000 * 3600 * 24 * 365));

    if (diffYears < 30) {
      return "Active";
    } else if (diffYears < 40) {
      return "Inactive";
    } else {
      return "Blacklisted";
    }
  };

  //React Pagination function to control pagination of the table
  const handlePageChange = (pageNumber: number) => {
    setActivePage(pageNumber);
  };

  const indexOfLastItem = activePage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className=" p-2 mx-auto sm:p-4 text-blue-900 min-h-[120vh] ">
      <div className="overflow-x-auto min-h-[120vh] ">
        <table className="min-w-full text-xs min-h-[120%]">
          <thead className="bg-white">
            <tr className="text-left">
              <th className="p-3">
                ORGANIZATION <PopUp />{" "}
              </th>
              <th className="p-3">
                USERNAME <PopUp />
              </th>
              <th className="p-3">
                EMAIL <PopUp />
              </th>
              <th className="p-3">
                PHONE NUMBER <PopUp />
              </th>
              <th className="p-3">
                DATE JOINED <PopUp />
              </th>
              <th className="p-3">
                STATUS <PopUp />
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {isLoading && (
              <div className=" absolute bottom-[30%] left-[50%] w-20 h-20 border-4 border-dashed rounded-full animate-spin border-violet-400"></div>
            )}
            {currentItems.map((user) => (
              <tr
                key={user.id}
                className="border-b border-opacity-20 border-gray-900 bg-white"
              >
                <td className="p-3">
                  <p>{user.orgName}</p>
                </td>
                <td className="p-3">
                  <p>{user.userName}</p>
                </td>
                <td className="p-3">
                  <p>{user.email}</p>
                </td>
                <td className="p-3">
                  <p>{user.phoneNumber}</p>
                </td>
                <td className="p-3 ">
                  <p>{user.createdAt}</p>
                </td>
                <td className="p-3 ">
                  <button
                    onClick={() => {
                      navigate("/Userprofile/:id");
                    }}
                    className={
                      getButtonText(user.lastActiveDate) === "Active"
                        ? "text-green-900 bg-green-400 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-normal rounded-full text-sm px-3 py-1 text-center mb-2 dark:bg-green-400 dark:hover:bg-green-700 dark:focus:ring--900"
                        : getButtonText(user.lastActiveDate) === "Inactive"
                        ? "text-purple-900 bg-purple-400 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-normal rounded-full text-sm px-3 py-1 text-center mb-2 dark:bg-purple-400 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                        : "text-red-900 bg-red-400 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-normal rounded-full text-sm px-3 py-1 text-center mb-2 dark:bg-red-400 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    }
                  >
                    {getButtonText(user.lastActiveDate)}
                  </button>
                </td>
                <td>
                  <PopUp2 />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex flex-row items-center justify-between  mt-5">
          <div className="flex lg:flex-row items-center">
            <span className="flex items-center gap-1 text-sm text-gray-700 dark:text-gray-400">
              Showing{" "}
              <span className="font-semibold text-gray-900">
                <select
                  id="countries"
                  className="bg-gray-900 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[4rem] p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>10</option>
                </select>
              </span>{" "}
              out of <span className="font-semibold text-gray-900">100</span>
            </span>
          </div>
          <div>
            <Pagination
              activePage={activePage}
              itemsCountPerPage={itemsPerPage}
              totalItemsCount={users.length}
              pageRangeDisplayed={5}
              onChange={handlePageChange}
              innerClass="inline-flex items-center -space-x-px"
              linkClass="px-3 py-2 leading-tight text-gray-500  hover:bg-gray-100 hover:text-gray-700 "
              itemClass=""
              itemClassLast="hidden px-3 py-2 leading-tight text-gray-500 bg-white  rounded-r-lg hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              itemClassFirst="hidden px-3 py-2 ml-0 leading-tight text-gray-500 bg-white  rounded-l-lg hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              linkClassNext="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-gray-100  rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              linkClassPrev="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-gray-100  rounded-l-lg hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              activeLinkClass="z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 border-gray-700 bg-gray-700 dark:text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
