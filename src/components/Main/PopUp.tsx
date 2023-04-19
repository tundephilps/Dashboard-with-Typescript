import { FilterList, Menu } from "@mui/icons-material";
import React, { useState } from "react";

const PopUp = () => {
  //Conditional Rendering Menu List Onclick of an Icon
  const [showOptions, setShowOptions] = useState(false);
  const handleClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <>
      <button onClick={handleClick}>
        <FilterList className="w-[5px]" />
      </button>

      {showOptions && (
        <div className="absolute bg-gray-100 border-2 border-blue-100 w-[270px] h-[600px] flex items-center justify-center px-[20px] py-3">
          <form className="min-w-[150px]">
            <div className="grid gap-2 mb-6  ">
              <div>
                <label className="block mb-2 text-sm font-medium text-blue-900">
                  Organization
                </label>
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-blue-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[230px] p-2.5 "
                >
                  <option selected>Select</option>
                  <option value="US">Glo</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-blue-900 ">
                  Username
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-blue-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[230px] p-2.5  placeholder-gray-400 "
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-blue-900 ">
                  Email
                </label>
                <input
                  type="text"
                  id="last_name"
                  className="bg-gray-50 border border-gray-300 text-blue-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[230px] p-2.5  placeholder-gray-400 "
                  placeholder="Doe"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-blue-900">
                  Date
                </label>
                <input
                  type="date"
                  id="company"
                  className="bg-gray-50 border border-gray-300 text-blue-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[230px] p-2.5 "
                  placeholder="Date"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-blue-900 ">
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-blue-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[230px]  p-2.5"
                  placeholder="Phone Number"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-blue-900">
                  Status
                </label>
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-blue-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[230px] p-2.5 "
                >
                  <option selected>Select</option>
                  <option value="US">Active</option>

                  <option value="US">InActive</option>
                  <option value="US">BlackListed</option>

                  <option value="US">Pending</option>
                </select>
              </div>

              <div className="flex flex-row items-center justify-between">
                <button
                  type="submit"
                  className="text-blue-900 bg-blue-50  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-[230px] sm:w-auto px-5 py-2.5 text-center "
                >
                  Reset
                </button>

                <button
                  type="submit"
                  className="text-white bg-[#39d0fd]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-[230px] sm:w-auto px-5 py-2.5 text-center "
                >
                  Filter
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default PopUp;
