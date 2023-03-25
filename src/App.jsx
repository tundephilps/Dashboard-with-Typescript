import React from "react";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
//import "./App.scss";
import Header from "./components/Dashboard/Header";
import SideBar from "./components/Dashboard/Sidebar";
import Stats from "./components/Main/Stats";
import { Table } from "./components/Main/Table";
import UserDetails from "./components/Main/UserDetails";
import UserProfile from "./components/Main/UserProfile";
import { UsersTable } from "./components/Main/UserTable";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />

          <Route
            path="/Userprofile/:id"
            element={
              <section className=" bg-gray-50">
                <Header />
                <div className="flex flex-row">
                  {/*Header starts*/}
                  <div>
                    <SideBar />
                  </div>
                  <div className="p-4 items-center justify-center w-[100%]">
                    {/** <!-- Add content here, remove div below -->*/}
                    <UserProfile />
                  </div>
                </div>
              </section>
            }
          />

          <Route
            path="/Dashboard//*"
            element={
              <section className=" bg-gray-50">
                <Header />
                <div className="flex flex-row">
                  {/*Header starts*/}
                  <div>
                    <SideBar />
                  </div>
                  <div className="p-4 items-center justify-center w-[100%]">
                    {/** <!-- Add content here, remove div below -->*/}
                    <Routes>
                      <Route
                        path="/"
                        element={
                          <div>
                            <Stats /> <UsersTable />{" "}
                          </div>
                        }
                      />
                    </Routes>
                  </div>
                </div>
              </section>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
