import React from "react";
//import "./Form.scss";

import { Link } from "react-router-dom";

const Form = () => {
  return (
    <form className="">
      <h1 className=" font-bold text-2xl text-blue-900 mb-1">Welcome</h1>
      <p className="text-sm font-normal text-blue-900 mb-8">
        Enter Details to Login
      </p>
      <div className="flex items-center border-2 mb-8 py-2 px-3 ">
        <input
          id="email"
          className=" pl-2 w-[447px] h-[50] outline-none border-none"
          type="email"
          name="email"
          placeholder="Email Address"
        />
      </div>
      <div className="flex items-center border-2 mb-12 py-2 px-3 ">
        <input
          className="pl-2 w-full outline-none border-none"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <p className="text-[12px] text-cyan-600">SHOW</p>
      </div>
      <Link to="/Dashboard">
        {" "}
        <button
          type="submit"
          className="block w-full h=[50px] bg-cyan-600 mt-5 py-2 rounded-sm hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
        >
          LOG IN
        </button>
      </Link>
      <div className="flex justify-between mt-4">
        <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">
          Forgot Password ?
        </span>

        <a
          href="#"
          className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all"
        >
          Don't have an account yet?
        </a>
      </div>
    </form>
  );
};

export default Form;
