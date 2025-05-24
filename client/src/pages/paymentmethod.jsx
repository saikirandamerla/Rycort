import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { FaDownload } from "react-icons/fa";
import profile from "../assets/profile.png";
import carditcard from "../assets/card.png";
import Sidebar from "../components/SideBar";

const PaymentInfo = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main content */}
      <div
        style={{
          marginLeft: isSidebarOpen ? "250px" : "70px",
          transition: "margin-left 0.3s ease-in-out",
          width: "100%",
        }}
      >
        <div className="container mt-4 sora-font">
          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2>Payment Information</h2>
            <div className="d-flex align-items-center">
              <img
                src={profile}
                alt="avatar"
                className="rounded-circle me-2 avatar-img"
              />
              <div>
                <div className="fw-bold">Love Quin</div>
                <div className="text-muted">2nd Class</div>
              </div>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="row mb-4">
            <div className="col-md-4 mb-3">
              <div className="card summary-card text-center p-3 h-100">
                <div className="d-flex align-items-center justify-content-center mb-2">
                  <i className="bi bi-cash-stack text-primary fs-4 me-2"></i>
                  <div>
                    <div className="text-muted small">Total amount</div>
                    <div className="fw-bold">Rs.50,000</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card summary-card text-center p-3 h-100">
                <div className="d-flex align-items-center justify-content-center mb-2">
                  <i className="bi bi-calendar3 text-primary fs-4 me-2"></i>
                  <div>
                    <div className="text-muted small">Due date</div>
                    <div className="fw-bold">May 31, 2025</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card summary-card text-center p-3 h-100">
                <div className="d-flex align-items-center justify-content-center mb-2">
                  <i className="bi bi-check2-circle text-primary fs-4 me-2"></i>
                  <div>
                    <div className="text-muted small">Payment status</div>
                    <div className="fw-bold text-warning">Pending</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Payment History & Upcoming Payments Table 1 */}
          <div className="row mb-3">
            <div className="col-md-8">
              <h5 className="fw-semibold mb-2">Payment History</h5>
              <div className="p-3 rounded gradient-box">
                <table className="table border rounded no-vertical-border">
                  <thead className="table-light">
                    <tr>
                      <th>Date</th>
                      <th>Description</th>
                      <th>Status</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>03/04/2025</td>
                      <td>Tuition fee</td>
                      <td><span className="badge bg-success">Paid</span></td>
                      <td>Rs.20,000</td>
                    </tr>
                    <tr>
                      <td>02/03/2025</td>
                      <td>Transport fee</td>
                      <td><span className="badge bg-success">Paid</span></td>
                      <td>Rs.10,000</td>
                    </tr>
                    <tr>
                      <td>02/03/2025</td>
                      <td>Tuition fee</td>
                      <td><span className="badge bg-success">Paid</span></td>
                      <td>Rs.20,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-md-4">
              <h5 className="fw-semibold mb-2">Upcoming Payments</h5>
              <div className="p-3 rounded gradient-box">
                <table className="table border rounded no-vertical-border">
                  <thead className="table-light">
                    <tr>
                      <th>Type</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Tuition fee</td>
                      <td>Rs.10,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Download Receipt - moved up */}
          <div className="d-flex justify-content-end mb-4" style={{ marginTop: "-90px" }}>
            <div className="col-md-4 p-3">
              <h5 className="fw-semibold mb-2">Download Receipt</h5>
              <button className="btn btn-primary d-flex align-items-center">
                <FaDownload className="me-2 icon-xs text-white" />
                <span>Download receipt</span>
              </button>
            </div>
          </div>

          {/* Bottom row: Upcoming 2, Card, Payment method */}
          <div className="row align-items-start" style={{ marginTop: "-20px" }}>
            <div className="col-md-4 mb-3">
              <h5 className="fw-semibold mb-2">Upcoming Payments</h5>
              <div className="p-3 rounded gradient-box">
                <table className="table border rounded no-vertical-border">
                  <thead className="table-light">
                    <tr>
                      <th>Type</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Transport fee</td>
                      <td>Rs.5,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-md-4 mb-3 text-center d-flex align-items-start justify-content-center">
              <img
                src={carditcard}
                alt="Card"
                className="img-fluid"
                style={{
                  border: "none",
                  boxShadow: "none",
                  borderRadius: "0",
                  marginTop: "-130px",
                }}
              />
            </div>

            <div className="col-md-4 mb-3 text-center p-3 rounded gradient-box">
              <h6 className="text-muted mb-1">Payment methods</h6>
              <a href="#" className="text-primary text-decoration-none">
                + Add new <br /> payment method
              </a>
            </div>
          </div>

          {/* Custom Styles */}
          <style>{`
            .sora-font {
              font-family: 'Sora', sans-serif;
            }

            .avatar-img {
              width: 50px;
              height: 50px;
            }

            .icon-xs {
              font-size: 0.85rem;
              color: #ffffff;
            }

            .badge {
              font-size: 0.75rem;
              padding: 0.4em 0.6em;
            }

            .table td,
            .table th {
              vertical-align: middle;
              background-color: transparent !important;
            }

            .no-vertical-border {
              border-left: none;
              border-right: none;
            }

            .no-vertical-border th,
            .no-vertical-border td {
              border-left: none !important;
              border-right: none !important;
              border-top: 1px solid #dee2e6;
              border-bottom: 1px solid #dee2e6;
            }

            .no-vertical-border thead th {
              border-top: none !important;
            }

            .table-light {
              background-color: transparent !important;
            }

            .gradient-box {
              background: linear-gradient(to bottom, #e0f0ff, #ffffff);
              border-radius: 1rem;
            }

            .summary-card {
              border: 1px solid #e0e0e0;
              border-radius: 12px;
              background: linear-gradient(to bottom right, #f4faff, #ffffff);
              box-shadow: 0 1px 3px rgba(0,0,0,0.05);
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;
