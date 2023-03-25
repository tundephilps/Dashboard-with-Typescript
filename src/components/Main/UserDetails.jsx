import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Star, StarOutline, KeyboardBackspace } from "@mui/icons-material";
import axios from "axios";

const UserDetails = ({ match }) => {
  const [userData, setUserData] = useState([]);
  //const { id } = match.params;
  //const params = useParams;

  useEffect(() => {
    axios
      .get(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${userData.id}`
      )
      .then((res) => {
        setUserData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div>
      {userData.map((item) => {
        return (
          <div
            key={item.id}
            className="bg-white w-full h-[full] mt-[2rem] p-4 text-blue-900 "
          >
            <h2 className="text-blue-900 text-lg pb-3 font-medium">
              Personal Information
            </h2>

            <div>
              <div className="sm:px-7 sm:pt-7 px-4 pt-4 flex flex-col w-full border-b  bg-white dark:text-white  sticky top-0">
                <div className="flex w-full items-center">
                  <div className="flex flex-row items-center text-3xl text-blue-900 ">
                    <img
                      src={item.profile.avatar}
                      className="w-12 mr-4 rounded-full"
                      alt="profile"
                    />
                    <div className="flex flex-col gap-2">
                      <div>
                        <h1>{item.userName}</h1>
                        <p className="text-blue-900 text-[17px]">
                          {item.accountNumber}
                        </p>
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
                    <h5>
                      {item.profile.currency}
                      {item.accountBalance}
                    </h5>

                    <span>{item.profile.bvn}/ PROVIDUS BANK</span>
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

              {/*Header finish */}
              <div className="grid lg:grid-cols-5 grid-rows-2">
                <div>
                  <h2>Full Name</h2>
                  <span>
                    {item.profile.firstName}
                    {"-"}
                    {item.profile.lastName}
                  </span>
                  <br />
                  <br />
                  <h2>Martial Status</h2>
                  <span>{item.profile.gender}</span>
                </div>
                <div>
                  <h2>Phone Number</h2>
                  <span>{item.phoneNumber}</span>
                  <br />
                  <br />
                  <h2>Children</h2>
                  <span>None</span>
                </div>
                <div>
                  <h2>Email Address</h2>
                  <span>{item.email}</span>
                  <br />
                  <br />

                  <h2>Type of resident</h2>
                  <span>Parent Apartment</span>
                </div>
                <div>
                  <h2>BVN</h2>
                  <span>{item.profile.bvn}</span>
                  <br />
                  <br />
                </div>
                <div>
                  <h2>Gender</h2>
                  <span>{item.profile.gender}</span>
                  <br />
                  <br />
                </div>
              </div>

              <hr className="w-full mt-3 mb-3" />
              <h2 className="text-blue-900 text-lg pb-3 font-medium">
                Education and Employment
              </h2>
              <div className="grid lg:grid-cols-4 grid-rows-2">
                <div>
                  <h2>LEVEL OF EDUCATION</h2>
                  <span>{item.education.level}</span>
                  <br />
                  <br />
                  <h2>Office Email</h2>
                  <span>{item.education.officeEmail}</span>
                </div>
                <div>
                  <h2>EMPLOYMENT STATUS</h2>
                  <span>{item.education.employmentStatus}</span>
                  <br />
                  <br />
                  <h2>MONTHLY INCOME</h2>
                  <span>{item.education.monthlyIncome} </span>
                </div>
                <div>
                  <h2>SECTOR OF EMPLOYMENT</h2>
                  <span>{item.education.sector}</span>
                  <br />
                  <br />

                  <h2>LOAN REPAYMENT</h2>
                  <span>{item.education.loanRepayment}</span>
                </div>
                <div>
                  <h2>DURATION OF EMPLOYMENT </h2>
                  <span>{item.education.duration}</span>
                  <br />
                  <br />
                </div>
              </div>

              <hr className="w-full mt-3 mb-3" />
              <h2 className="text-blue-900 text-lg pb-3 font-medium">
                Socials
              </h2>
              <div className="grid lg:grid-cols-5 grid-rows-2">
                <div>
                  <h2>TWITTER</h2>
                  <span>{item.socials.twitter}</span>
                  <br />
                  <br />
                </div>
                <div>
                  <h2>FACEBOOK</h2>
                  <span>{item.socials.facebook}</span>
                  <br />
                  <br />
                </div>
                <div>
                  <h2>INSTAGRAM</h2>
                  <span>{item.socials.instagram}</span>
                  <br />
                  <br />
                </div>
              </div>

              <hr className="w-full mt-3 mb-3" />
              <h2 className="text-blue-900 text-lg pb-3 font-medium">
                Guarrantor
              </h2>
              <div className="grid lg:grid-cols-5 grid-rows-2">
                <div>
                  <h2>Full Name</h2>
                  <span>
                    {item.guarantor.firstName}-{item.guarantor.lastName}
                  </span>
                  <br />
                  <br />
                </div>
                <div>
                  <h2>Phone number</h2>
                  <span>{item.guarantor.phoneNumber}</span>
                  <br />
                  <br />
                </div>
                <div>
                  <h2>EMAIL ADDRESS</h2>
                  <span>{item.guarantor.email}</span>
                  <br />
                  <br />
                </div>
                <div>
                  <h2>RELATIONSHIP</h2>
                  <span>{item.guarantor.firstName}</span>
                  <br />
                  <br />
                </div>
              </div>

              <hr className="w-full mt-3 mb-3" />

              <div className="grid lg:grid-cols-5 grid-rows-2">
                <div>
                  <h2>Full Name</h2>
                  <span>Frank Amadi</span>
                  <br />
                  <br />
                </div>
                <div>
                  <h2>Phone number</h2>
                  <span>0803427282</span>
                  <br />
                  <br />
                </div>
                <div>
                  <h2>EMAIL ADDRESS</h2>
                  <span>tope@gmail.com</span>
                  <br />
                  <br />
                </div>
                <div>
                  <h2>RELATIONSHIP</h2>
                  <span>Sister</span>
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserDetails;
