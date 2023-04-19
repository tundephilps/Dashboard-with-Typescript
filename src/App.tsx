import React from "react";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Header from "./components/Dashboard/Header";
import SideBar from "./components/Dashboard/Sidebar";
import SignUp from "./components/SignUp/SignUp";
import Stats2 from "./components/Main/Stats2";
import Users from "./components/API/components/Users";
import UserDetail from "./components/API/components/UserDetail";

function App({ user, users }) {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />

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
                  <div className="p-4 items-center justify-center w-[100%] overflow-scroll lg:overflow-visible">
                    {/** <!-- Add content here, remove div below -->*/}
                    <Routes>
                      <Route
                        path="/"
                        element={
                          <div>
                            <Stats2 />
                            <Users />
                          </div>
                        }
                      />

                      <Route path="/users/:id" element={<UserDetail />} />
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
