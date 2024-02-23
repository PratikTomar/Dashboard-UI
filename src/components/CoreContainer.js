import React from "react";
import viewIcon from "../assets/Frame (18).png";
import "../styles/Dashboard.css";
import Card from "./Card";

const CoreContainer = () => {
  return (
    <div className="core-container">
      <div className="card running-jobs">
        <Card title="Running Jobs" />
      </div>

      <div className="card running-frames">
        <Card title="Running Frames" />
      </div>

      <div className="active-jobs-table">
        <h2 className="table-title">Active Jobs</h2>
        <table>
          <thead>
            <tr>
              <th>Job ID</th>
              <th>Project ID</th>
              <th>STAGE</th>
              <th>Scene / Shot Name</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(10)].map((currItem, index) => (
              <tr key={index}>
                <td>1234567890</td>
                <td>Pro_256</td>
                <td>Rendering</td>
                <td>KD1_00123_DPI_JK001</td>
                <td className="view-cell">
                  <img src={viewIcon} alt="View" className="view-icon" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoreContainer;
