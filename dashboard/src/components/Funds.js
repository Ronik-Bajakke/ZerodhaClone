import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <div style={{ padding: "20px" }}>
      {/* Top Section */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <p style={{ fontSize: "16px", fontWeight: "600" }}>
          Instant, zero-cost fund transfers with UPI
        </p>
        <div>
          <Link
            style={{
              backgroundColor: "green",
              color: "white",
              padding: "8px 16px",
              marginRight: "10px",
              borderRadius: "5px",
              textDecoration: "none",
            }}
          >
            Add Funds
          </Link>
          <Link
            style={{
              backgroundColor: "blue",
              color: "white",
              padding: "8px 16px",
              marginRight: "10px",
              borderRadius: "5px",
              textDecoration: "none",
            }}
          >
            Withdraw
          </Link>
          <Link
            style={{
              border: "1px solid gray",
              padding: "8px 16px",
              borderRadius: "5px",
              textDecoration: "none",
              color: "black",
            }}
          >
            Fund Transfer History
          </Link>
        </div>
      </div>

      {/* Equity Section */}
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "8px",
          marginBottom: "20px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            padding: "10px 15px",
            borderBottom: "1px solid #eee",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#f8f9fa",
          }}
        >
          <h5 style={{ margin: 0 }}>Equity</h5>
          <span
            style={{
              backgroundColor: "green",
              color: "white",
              padding: "3px 10px",
              borderRadius: "12px",
              fontSize: "12px",
            }}
          >
            Active
          </span>
        </div>
        <div style={{ padding: "15px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tbody>
              <tr>
                <td>Available margin</td>
                <td style={{ fontWeight: "bold", color: "green" }}>₹4,043.10</td>
              </tr>
              <tr>
                <td>Used margin</td>
                <td>₹3,757.30</td>
              </tr>
              <tr>
                <td>Available cash</td>
                <td>₹4,043.10</td>
              </tr>
              <tr style={{ backgroundColor: "#f8f9fa" }}>
                <td>Opening Balance</td>
                <td>₹4,043.10</td>
              </tr>
              <tr>
                <td>Closing Balance</td>
                <td>₹3,736.40</td>
              </tr>
              <tr>
                <td>Payin</td>
                <td>₹4,064.00</td>
              </tr>
              <tr>
                <td>SPAN</td>
                <td>₹0.00</td>
              </tr>
              <tr>
                <td>Delivery margin</td>
                <td>₹0.00</td>
              </tr>
              <tr>
                <td>Exposure</td>
                <td>₹0.00</td>
              </tr>
              <tr>
                <td>Options premium</td>
                <td>₹0.00</td>
              </tr>
              <tr style={{ backgroundColor: "#f8f9fa" }}>
                <td>Collateral (Liquid funds)</td>
                <td>₹0.00</td>
              </tr>
              <tr>
                <td>Collateral (Equity)</td>
                <td>₹0.00</td>
              </tr>
              <tr>
                <td>Total Collateral</td>
                <td>₹0.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Commodity Section */}
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "8px",
          marginBottom: "20px",
          padding: "20px",
          textAlign: "center",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        <h6 style={{ marginBottom: "10px" }}>Commodity Account</h6>
        <p style={{ color: "gray", fontSize: "14px" }}>
          You don’t have a commodity account linked yet.
        </p>
        <Link
          style={{
            display: "block",
            backgroundColor: "blue",
            color: "white",
            padding: "8px 16px",
            borderRadius: "5px",
            textDecoration: "none",
          }}
        >
          Open Account
        </Link>
      </div>

      {/* Notices Section */}
      <div
        style={{
          backgroundColor: "#fff3cd",
          color: "#664d03",
          padding: "12px 15px",
          borderRadius: "5px",
          fontSize: "14px",
        }}
      >
        ⚠️ <strong>Note:</strong> Funds might take up to 24 hours to reflect in
        your account depending on the payment method used.
      </div>
    </div>
  );
};

export default Funds;
