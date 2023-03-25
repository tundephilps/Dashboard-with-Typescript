import React from "react";
import {
  DocumentScanner,
  EmojiPeople,
  PanoramaPhotosphere,
  People,
} from "@mui/icons-material";

const Stats = () => {
  return (
    <div>
      <h2 className="text-3xl text-blue-900 font-bold">User</h2>
      <div
        className="main-stats lg:flex-row flex-col items-center justify-center "
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "24px",
          flexGrow: 1,
          flexWrap: "wrap",
          margin: "14px",
        }}
      >
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
              400
            </div>
          </div>
        </div>
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
              4000
            </div>
          </div>
        </div>
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
              12,453
            </div>
          </div>
        </div>
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
              203,000
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
