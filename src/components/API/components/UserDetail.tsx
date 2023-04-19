import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { IUser } from "../models/IUser";
import axios from "axios";
import { KeyboardBackspace, Star, StarOutline } from "@mui/icons-material";
//import { UsersService } from "../services/UsersService";

interface IParams {
  id: string;
}
interface IState {
  loading: boolean;
  user: IUser;
  errorMsg: string;
}

export class UsersService {
  private static URL: string =
    "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1";

  public static getAllUsers() {
    let UserURL: string = `${this.URL}/users`;
    return axios.get(UserURL);
  }

  public static getUser(userId: string) {
    let UserURL: string = `${this.URL}/users/${userId}`;
    return axios.get(UserURL);
  }
}

const UserDetail: React.FC = () => {
  const { id } = useParams<IParams | any>();

  const [state, setState] = useState<IState>({
    loading: false,
    user: {} as IUser,
    errorMsg: "",
  });

  //getting data from api
  useEffect(() => {
    if (id) {
      setState({ ...state, loading: true });
      UsersService.getUser(id)
        .then((res) =>
          setState({
            ...state,
            loading: false,
            user: res.data,
          })
        )
        .catch((error) =>
          setState({
            ...state,
            loading: false,
            errorMsg: error.message,
          })
        );
    }
  }, [id]);

  const { loading, user, errorMsg } = state;
  return (
    <>
      <div className="px-[4.3rem]">
        <button
          disabled
          type="button"
          className="py-2.5 px-2  mr-2 text-[12px] space-x-3 font-medium text-[#545F7D]  rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700  dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
        >
          <a href="/Dashboard">
            <KeyboardBackspace className="text-[6px]" />
            Back to User
          </a>
        </button>

        <div className="flex items-center justify-between pb-4">
          <h2 className="text-[24px] text-blue-900 font-bold">User Details</h2>
          <div>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-red-700 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200  focus:ring-4 focus:outline-none focus:ring-red-100">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                BLACKLIST USER
              </span>
            </button>

            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-cyan-500 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
                ACTIVATE USER
              </span>
            </button>
          </div>
        </div>
      </div>
      <div>
        {loading && (
          <div className=" absolute bottom-[30%] left-[50%] w-20 h-20 border-4 border-dashed rounded-full animate-spin border-violet-400"></div>
        )}
        {errorMsg && <h1>{errorMsg}</h1>}
        {Object.keys(user).length > 0 && (
          <div className="flex flex-col items-center justify-center">
            {/*Header Starts */}
            <div className="bg-white w-[1037px] h-[210px] mt-[1rem]  text-blue-900 ">
              <div className="sm:px-7 sm:pt-7 px-4 pt-4 flex flex-col gap-12 w-full border-b  bg-white dark:text-white  sticky top-0">
                <div className="flex w-full items-center">
                  <div className="flex flex-row items-center text-3xl text-blue-900 ">
                    <img
                      src={user.profile.avatar}
                      className="w-[100px] h-[100px] mr-4 rounded-full"
                      alt="profile"
                    />
                    <div className="flex flex-col gap-2">
                      <div>
                        <p className="text-[22px]">{user.userName}</p>
                        <p className="text-blue-900 text-[14px]">
                          {user.profile.accountNumber}
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        borderLeft: "1px solid #545F7D",
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
                      borderLeft: "1px solid #545F7D",
                      height: "50px",
                      marginLeft: "10px",
                    }}
                  ></div>

                  <div className=" ml-3 text-blue-900 font-medium">
                    <p className="text-[22px]">
                      {user.profile.currency}
                      {user.accountBalance}
                    </p>

                    <span className="text-[12px]">
                      {user.profile.bvn}/ PROVIDUS BANK
                    </span>
                  </div>

                  <div className="ml-auto sm:flex hidden items-center justify-end"></div>
                </div>
                <div
                  className=" items-center justify-items-end space-x-[2%] sm:mt-7 h-full w-full lg:flex hidden"
                  style={{ fontSize: "12px" }}
                >
                  <a
                    href="/#"
                    className="px-[1%] border-b-4 border-cyan-500 text-cyan-500  pb-1.5 "
                  >
                    General Details
                  </a>
                  <a
                    href="/#"
                    className="px-12 border-b-2 border-transparent text-gray-600 dark:text-gray-400 pb-1.5"
                  >
                    Documents
                  </a>
                  <a
                    href="/#"
                    className="px-12 border-b-2 border-transparent text-gray-600 dark:text-gray-400 pb-1.5 sm:block hidden"
                  >
                    Bank Details
                  </a>
                  <a
                    href="/#"
                    className="px-12 border-b-2 border-transparent text-gray-600 dark:text-gray-400 pb-1.5 sm:block hidden"
                  >
                    Loans
                  </a>
                  <a
                    href="/#"
                    className="px-12 border-b-2 border-transparent text-gray-600 dark:text-gray-400 pb-1.5 sm:block hidden"
                  >
                    Savings
                  </a>
                  <a
                    href="/#"
                    className="px-12 border-b-2 border-transparent text-gray-600 dark:text-gray-400 pb-1.5 sm:block hidden"
                  >
                    Apps and Systems
                  </a>
                </div>
              </div>

              {/*Header finish */}
            </div>

            {/*Header Ends */}

            {/*User Details Starts */}
            <div className="bg-white w-[1037px] h-[910px] mt-[2rem] p-4 text-blue-900 ">
              <h2 className="text-blue-900 text-lg pb-3 font-medium">
                Personal Information
              </h2>
              <div className="grid lg:grid-cols-5 grid-rows">
                <div>
                  <h2>Full Name</h2>
                  <span>
                    {user.profile.firstName}
                    {"-"}
                    {user.profile.lastName}
                  </span>
                  <br />
                  <br />
                  <h2>Martial Status</h2>
                  <span>{user.profile.gender}</span>
                </div>
                <div>
                  <h2>Phone Number</h2>
                  <span>{user.profile.phoneNumber}</span>
                  <br />
                  <br />
                  <h2>Children</h2>
                  <span>None</span>
                  <br />
                  <br />
                </div>
                <div>
                  <h2>Email Address</h2>
                  <span>{user.profile.email}</span>
                  <br />
                  <br />

                  <h2>Type of resident</h2>
                  <span>Parent Apartment</span>
                </div>
                <div>
                  <h2>BVN</h2>
                  <span>{user.profile.bvn}</span>
                  <br />
                </div>
                <div>
                  <h2>Gender</h2>
                  <span>{user.profile.gender}</span>
                  <br />
                  <br />
                </div>
              </div>

              <hr className="w-full mt-5 mb-5 " />
              <h2 className="text-blue-900 text-lg pb-3 font-medium">
                Education and Employment
              </h2>
              <div className="grid lg:grid-cols-4 grid-rows">
                <div>
                  <h2>LEVEL OF EDUCATION</h2>
                  <span>{user.education.level}</span>
                  <br />
                  <br />
                  <h2>Office Email</h2>
                  <span>{user.education.officeEmail}</span>
                </div>
                <div>
                  <h2>EMPLOYMENT STATUS</h2>
                  <span>{user.education.employmentStatus}</span>
                  <br />
                  <br />
                  <h2>MONTHLY INCOME</h2>
                  <span>{user.education.monthlyIncome} </span>
                  <br />
                  <br />
                </div>
                <div>
                  <h2>SECTOR OF EMPLOYMENT</h2>
                  <span>{user.education.sector}</span>
                  <br />
                  <br />

                  <h2>LOAN REPAYMENT</h2>
                  <span>{user.education.loanRepayment}</span>
                </div>
                <div>
                  <h2>DURATION OF EMPLOYMENT </h2>
                  <span>{user.education.duration}</span>
                  <br />
                  <br />
                </div>
              </div>

              <hr className="w-full mt-5 mb-5" />
              <h2 className="text-blue-900 text-lg pb-3 font-medium">
                Socials
              </h2>
              <div className="grid lg:grid-cols-5 grid-rows">
                <div>
                  <h2>TWITTER</h2>
                  <span>{user.socials.twitter}</span>
                  <br />
                  <br />
                </div>
                <div>
                  <h2>FACEBOOK</h2>
                  <span>{user.socials.facebook}</span>
                  <br />
                  <br />
                </div>
                <div>
                  <h2>INSTAGRAM</h2>
                  <span>{user.socials.instagram}</span>
                  <br />
                  <br />
                </div>
              </div>

              <hr className="w-full mt-5 mb-5" />
              <h2 className="text-blue-900 text-lg pb-3 font-medium">
                Guarrantor
              </h2>
              <div className="grid lg:grid-cols-5 grid-rows-2">
                <div>
                  <h2>Full Name</h2>
                  <span>
                    {user.guarantor.firstName}-{user.guarantor.lastName}
                  </span>
                  <br />
                  <br />
                </div>
                <div>
                  <h2>Phone number</h2>
                  <span>{user.guarantor.phoneNumber}</span>
                  <br />
                  <br />
                </div>
                <div>
                  <h2>GENDER</h2>
                  <span>{user.guarantor.gender}</span>
                  <br />
                  <br />
                </div>
                <div>
                  <h2>ADDRESS</h2>
                  <span>{user.guarantor.address}</span>
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UserDetail;
