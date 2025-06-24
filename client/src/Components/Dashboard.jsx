import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

import "./Dashboard.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", sales: 400 },
  { name: "Tue", sales: 300 },
  { name: "Wed", sales: 500 },
  { name: "Thu", sales: 200 },
  { name: "Fri", sales: 700 },
  { name: "Sat", sales: 600 },
  { name: "Sun", sales: 800 },
];

const orders = [
  {
    id: "ORD123",
    customer: "John Doe",
    status: "Delivered",
    amount: "$120.00",
    payment: "Card",
  },
  {
    id: "ORD124",
    customer: "Jane Smith",
    status: "Pending",
    amount: "$80.50",
    payment: "Cash",
  },
  {
    id: "ORD125",
    customer: "Mike Ross",
    status: "Cancelled",
    amount: "$50.00",
    payment: "Card",
  },
  {
    id: "ORD126",
    customer: "Sarah Connor",
    status: "Shipped",
    amount: "$210.75",
    payment: "PayPal",
  },
  {
    id: "ORD127",
    customer: "Linus Torvalds",
    status: "Delivered",
    amount: "$15.00",
    payment: "Card",
  },
  {
    id: "ORD128",
    customer: "Ada Lovelace",
    status: "Pending",
    amount: "$300.00",
    payment: "Bank Transfer",
  },
];

export default function Dashboard() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <span className="sidebar-logo">🛒</span>
          <div className="sidebar-title">Admin Dashboard</div>
        </div>
        <nav className="sidebar-nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              "sidebar-link" + (isActive ? " active" : "")
            }
          >
            <span className="sidebar-icon">🏠</span> Dashboard
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              "sidebar-link" + (isActive ? " active" : "")
            }
          >
            <span className="sidebar-icon">📦</span> Products
          </NavLink>
          <NavLink
            to="/orders"
            className={({ isActive }) =>
              "sidebar-link" + (isActive ? " active" : "")
            }
          >
            <span className="sidebar-icon">📝</span> Orders
          </NavLink>
          <NavLink
            to="/customers"
            className={({ isActive }) =>
              "sidebar-link" + (isActive ? " active" : "")
            }
          >
            <span className="sidebar-icon">👥</span> Customers
          </NavLink>
          <NavLink
            to="/analytics"
            className={({ isActive }) =>
              "sidebar-link" + (isActive ? " active" : "")
            }
          >
            <span className="sidebar-icon">📊</span> Analytics
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              "sidebar-link" + (isActive ? " active" : "")
            }
          >
            <span className="sidebar-icon">⚙️</span> Settings
          </NavLink>
        </nav>
      </aside>

      <main className="main-content">
        <header className="dashboard-header">
          <h1>Dashboard Overview</h1>
          <div className="user-profile" ref={dropdownRef}>
            <div
              className="avatar-wrapper"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <div className="avatar-icon">JD</div>
              <span className="username">John Doe</span>
              <span className="dropdown-arrow">▼</span>
            </div>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <ul>
                  <li>Profile</li>
                  <li>Settings</li>
                  <li className="logout-item">Logout</li>
                </ul>
              </div>
            )}
          </div>
        </header>

        <section className="metrics-panel">
          <div
            className="metric-card"
            style={{ "--metric-icon-color-rgb": "52, 152, 219" }}
          >
            {" "}
        
            <div className="metric-icon">📦</div>
            <p className="metric-title">Total Orders</p>
            <p className="metric-value">1,200</p>
            <p className="metric-trend success">+15% vs last month</p>
          </div>
          <div
            className="metric-card"
            style={{ "--metric-icon-color-rgb": "46, 204, 113" }}
          >
            {" "}
       
            <div className="metric-icon">💰</div>
            <p className="metric-title">Revenue Today</p>
            <p className="metric-value">$2,450</p>
            <p className="metric-trend info">+5% vs yesterday</p>
          </div>
          <div
            className="metric-card"
            style={{ "--metric-icon-color-rgb": "231, 76, 60" }}
          >
            {" "}
        
            <div className="metric-icon">🔄</div>
            <p className="metric-title">Conversion Rate</p>
            <p className="metric-value">3.5%</p>
            <p className="metric-trend danger">-0.2% vs last week</p>
          </div>
          <div
            className="metric-card"
            style={{ "--metric-icon-color-rgb": "241, 196, 15" }}
          >
            {" "}
        
            <div className="metric-icon">⭐</div>
            <p className="metric-title">Top-Selling Product</p>
            <p className="metric-value">Smartphone X</p>
            <p className="metric-trend neutral">450 units sold</p>
          </div>
        </section>

        <section className="chart-card sales-chart">
          <h2>Weekly Sales Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={data}
              margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} />
              <Tooltip cursor={{ strokeDasharray: "2 2" }} />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="#3b82f6"
                strokeWidth={3}
                dot={{ r: 5, fill: "#3b82f6", stroke: "#fff", strokeWidth: 2 }}
                activeDot={{
                  r: 8,
                  fill: "#3b82f6",
                  stroke: "#fff",
                  strokeWidth: 2,
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </section>

        <section className="table-card orders-table">
          <h2>Recent Orders</h2>
          <div className="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Status</th>
                  <th>Amount</th>
                  <th>Payment Method</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.customer}</td>
                    <td>
                      <span
                        className={`status-tag ${order.status.toLowerCase()}`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td>{order.amount}</td>
                    <td>{order.payment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
