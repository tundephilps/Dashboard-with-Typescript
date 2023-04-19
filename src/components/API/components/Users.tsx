import React, { useState, useEffect } from "react";
//import { UsersService } from "../services/UsersService";
import { Link } from "react-router-dom";
import { IUsers } from "./../models/IUsers";
import axios from "axios";
import PopUp2 from "../../Main/PopUp2";
import PopUp from "../../Main/PopUp";

import Pagination from "react-js-pagination";

import {
  DocumentScanner,
  EmojiPeople,
  PanoramaPhotosphere,
  People,
} from "@mui/icons-material";

interface IState {
  loading: boolean;
  users: IUsers[];
  errorMsg: string;
  activePage: number;
  totalPages: number;
}

export class UsersService {
  private static URL: string =
    "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/?id";

  public static getAllUsers() {
    let UserURL: string = `${this.URL}/users`;
    return axios.get(UserURL);
  }

  public static getUser(userId: string) {
    let UserURL: string = `${this.URL}/users/${userId}`;
    return axios.get(UserURL);
  }
}

const Users: React.FC = () => {
  const [state, setState] = useState<IState>({
    loading: false,
    users: [] as IUsers[],
    errorMsg: "",
    activePage: 1,
    totalPages: 0,
  });

  //
  //network request
  useEffect(() => {
    setState({ ...state, loading: true });
    UsersService.getAllUsers()
      .then((res) =>
        setState({
          ...state,
          loading: false,
          users: res.data,
          totalPages: Math.ceil(res.data.length / 10),
        })
      )
      .catch((err) =>
        setState({
          ...state,
          loading: false,
          errorMsg: err.message,
        })
      );
    //eslint-disable-next-line
  }, []);

  const { loading, users, errorMsg, activePage, totalPages } = state;

  const handlePageChange = (selectedItem: number) => {
    setState({ ...state, activePage: selectedItem });
  };

  const getButtonText = (date: string) => {
    const currentDate = new Date();
    const lastActiveDate = new Date(date);
    const diff = Math.abs(currentDate.getTime() - lastActiveDate.getTime());
    const diffYears = Math.floor(diff / (1000 * 3600 * 24 * 365));

    if (diffYears < 30) {
      return "Active";
    } else if (diffYears < 40) {
      return "Blacklisted";
    } else {
      return "Inactive";
    }
  };

  const indexOfLastUser = activePage * 10;
  const indexOfFirstUser = indexOfLastUser - 10;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const itemsPerPage = 10;

  return (
    <>
      <section className="p-6 my-6 dark:text-gray-100">
        <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-white text-gray-180">
            <div
              className="stat-item "
              style={{
                display: "flex",
                backgroundColor: "white",
                borderRadius: "4px",
                flex: 1,
                flexWrap: "wrap",
                width: "35%",
                padding: "8px",
                marginRight: "16px",
              }}
            >
              <div className="counter space-y-2 p-2 ml-3">
                <i className="material-icons blue">
                  <People />
                </i>
                <div className="count text-blue-900">USERS</div>
                <div className="description text-blue-900 font-bold text-2xl">
                  {users.length}
                </div>
              </div>
            </div>
          </div>
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6  bg-white dark:text-gray-100">
            <div
              className="stat-item"
              style={{
                display: "flex",
                backgroundColor: "white",
                borderRadius: "4px",
                flex: 1,
                flexWrap: "wrap",
                width: "35%",
                padding: "8px",
                marginRight: "16px",
              }}
            >
              <div className="counter space-y-2 p-2 ml-3">
                <i className="material-icons green">
                  <EmojiPeople />
                </i>
                <div className="count text-blue-900">ACTIVE USERS</div>
                <div className="description text-blue-900 font-bold text-2xl">
                  43
                </div>
              </div>
            </div>
          </div>
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6  bg-white dark:text-gray-100">
            <div
              className="stat-item"
              style={{
                display: "flex",
                backgroundColor: "white",
                borderRadius: "4px",
                flex: 1,
                flexWrap: "wrap",
                width: "35%",
                padding: "8px",
                marginRight: "16px",
              }}
            >
              <div className="counter space-y-2 p-2 ml-3">
                <i className="material-icons red">
                  <PanoramaPhotosphere />
                </i>
                <div className="count text-blue-900">USERS WITH LOAN</div>
                <div className="description text-blue-900 font-bold text-2xl">
                  {
                    users.filter((user) => parseFloat(user.accountBalance) > 0)
                      .length
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6  bg-white dark:text-gray-100">
            <div
              className="stat-item"
              style={{
                display: "flex",
                backgroundColor: "white",
                borderRadius: "4px",
                flex: 1,
                flexWrap: "wrap",
                width: "35%",
                padding: "8px",
                marginRight: "16px",
              }}
            >
              <div className="counter space-y-2 p-2 ml-3">
                <i className="material-icons yellow">
                  <DocumentScanner />
                </i>
                <div className="count text-blue-900">USERS WITH SAVINGS</div>
                <div className="description text-blue-900 font-bold text-2xl">
                  {
                    users.filter(
                      (user) => parseFloat(user.education.loanRepayment) > 0
                    ).length
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className=" p-2 mx-auto sm:p-4 text-blue-900 min-h-[120vh] ">
        <div className="overflow-x-auto min-h-[120vh] ">
          {errorMsg && <p>{errorMsg}</p>}
          {loading && (
            <div className=" absolute bottom-[30%] left-[50%] w-20 h-20 border-4 border-dashed rounded-full animate-spin border-violet-400"></div>
          )}

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
              {currentUsers.length > 0 &&
                currentUsers.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b border-opacity-20 border-gray-900 bg-white"
                  >
                    <td className="p-3">
                      <Link
                        to={`users/${user.id}`}
                        className="text-decoration-none"
                      >
                        {user.orgName}
                      </Link>
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
                        className={
                          getButtonText(user.lastActiveDate) === "Active"
                            ? "text-green-900 bg-green-400 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-normal rounded-full text-sm px-3 py-1 text-center mb-2 dark:bg-green-400 dark:hover:bg-green-700 dark:focus:ring--900"
                            : getButtonText(user.lastActiveDate) ===
                              "Blacklisted"
                            ? "text-purple-900 bg-purple-400 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-normal rounded-full text-sm px-3 py-1 text-center mb-2 dark:bg-purple-400 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                            : "text-red-900 bg-red-400 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-normal rounded-full text-sm px-3 py-1 text-center mb-2 dark:bg-red-400 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        }
                      >
                        {" "}
                        {getButtonText(user.lastActiveDate)}
                      </button>
                    </td>
                    <td>
                      <PopUp2 user={user} />
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
                    className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[4rem] p-1.5 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>10</option>
                  </select>
                </span>{" "}
                out of <span className="font-semibold text-gray-900">100</span>
              </span>
            </div>

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
    </>
  );
};

export default Users;
