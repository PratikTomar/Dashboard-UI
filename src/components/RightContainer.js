import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import icon15 from '../assets/Group 222.png';
import '../styles/Dashboard.css';

const RightContainer = () => {
  const data = [
    { name: '21 Jan', uv: 100 },
    { name: '22 Jan', uv: 0 },
    { name: '23 Jan', uv: 40 },
    { name: '24 Jan', uv: 20 },
    { name: '24 Jan', uv: 20 },
    { name: '25 Jan', uv: 60 },
  ];

  return (
    <div className="right-container">
      <div className="network-graph">
        <h1 className="section-title">Network</h1>
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#111827"
                fill="#111827"
                fillOpacity={0.9}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    <div className='container'>
      <div className="balance-info">
        <div className="balance-details">
        <h2 className="section-title">Balance</h2>
          <div className="balance-amount">
            <p className="currency-symbol">$</p>
            <p className="amount">458</p>
          </div>
          <div className="balance-breakdown">
            <div className="balance-item">
              <p className="label">Credits</p>
              <p className="value">$25</p>
            </div>
            <div className="balance-item">
              <p className="label">Coupon</p>
              <p className="value">$0</p>
            </div>
          </div>
          <div className="hours-remaining">
            <h2 className="label">Hours Remaining</h2>
            <p className="value">20:59:09</p>
          </div>
          <button className="recharge-btn">Recharge Now</button>
        </div>
      </div>

      <div className="storage-info">
        <div className="storage-details">
        <h2 className="section-title">Storage</h2>
          <img src={icon15} alt="Storage icon" className="storage-icon" />
          <p className="storage-amount">88 GB</p>
          <p className="storage-percent">Out of 100 GB (88%)</p>
          <button className="view-details-btn">View Details</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default RightContainer;
