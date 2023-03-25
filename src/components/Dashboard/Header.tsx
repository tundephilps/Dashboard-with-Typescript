import React from "react";
import tie from "./tie.jpg";

const Header = () => {
  return (
    <header className="flex items-center justify-between w-full px-4 bg-white border-b h-14">
      <div>
        <h1>LENDSQR</h1>
      </div>
      <div
        className="wrap"
        style={{
          width: "30%",
        }}
      >
        <div
          className="search"
          style={{ width: "100%", position: "relative", display: "flex" }}
        >
          <input
            type="text"
            className="searchTerm"
            style={{
              width: "100%",
              border: "1px solid #00B4CC",
              borderRight: "none",
              padding: "5px",
              height: "36px",
              borderRadius: "5px 0 0 5px",
              outline: "none",
              color: "#9DBFAF",
            }}
            placeholder="Search for Anything..."
            //  onFocus={() => this.setState({ color: "#00B4CC" })}
          />
          <button
            type="submit"
            className="searchButton"
            style={{
              width: "40px",
              height: "36px",
              border: "1px solid #00B4CC",
              background: "#00B4CC",
              textAlign: "center",
              color: "#fff",
              borderRadius: "0 5px 5px 0",
              cursor: "pointer",
              fontSize: "20px",
            }}
          >
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
      <div className="flex items-center">
        <a className="mr-5">Docs</a>{" "}
        <a href="#" className="flex text-gray-500">
          {" "}
          <svg
            className="shrink-0 w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />{" "}
          </svg>{" "}
        </a>{" "}
        <a href="#" className=" ml-5 mr-3 avatar avatar-sm w-6">
          {" "}
          <img
            src={tie}
            alt="Photo of Praveen Juge"
            className="rounded-[100%]"
          />{" "}
        </a>{" "}
        <a>Tunde Philps</a>
      </div>{" "}
    </header>
  );
};

export default Header;
