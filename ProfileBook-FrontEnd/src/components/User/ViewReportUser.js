import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

import "./Login.css";

//Adding User to report conformation
const ViewReportUser = () => {
  //const [userId, idchange] = useState("");
  const [userName, namechange] = useState("");
  const [emailId, emailchange] = useState("");
  const [reason, reasonchange] = useState("");
  const [userMobNo, phonechange] = useState("");
  const [active] = useState(true);
  const [validation, valchange] = useState(false);

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    const userdata = { userName, emailId, reason, userMobNo, active };

    fetch("http://localhost:9999/api/reportedUsers/addReportedUser/", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userdata),
    })
      .then((res) => {
        alert("Reported successfully.");
        navigate("/reportuser");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <h2>
        <u>ENTER REPORT USER DETAILS</u>
      </h2>

      <div className="row">
        <div style={{ marginTop: "1.5cm" }} className="offset-lg-3 col-lg-6">
          <form onSubmit={handlesubmit}>
            <div style={{ textAlign: "left" }}>
              <div style={{ textAlign: "center" }} className="container"></div>
              <div>
                <div className="row">
                  {/* 
                                 <div className="col-lg-12">
                                     <div className="form-group">
                                         <label>ID</label>
                                         <input value={userId} disabled="disabled" className="form-control"></input>
                                     </div>
                                 </div> */}

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label style={{ color: "black" }}>
                        {" "}
                        <b>User Name</b>
                      </label>
                      <input
                        required
                        value={userName}
                        onMouseDown={(e) => valchange(true)}
                        onChange={(e) => namechange(e.target.value)}
                        className="form-control"
                      ></input>
                      {userName.length === 0 && validation && (
                        <span className="text-danger">Enter the name</span>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label style={{ color: "black" }}>
                        <b> Email </b>
                      </label>
                      <input
                        value={emailId}
                        onChange={(e) => emailchange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label style={{ color: "black" }}>
                        {" "}
                        <b> Reason For Reporting </b>
                      </label>
                      <input
                        type="text"
                        value={reason}
                        onChange={(e) => reasonchange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label style={{ color: "black" }}>
                        <b> Mobile Number</b>
                      </label>
                      <input
                        value={userMobNo}
                        onChange={(e) => phonechange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <button
                        style={{ marginRight: "20px" }}
                        className="btn btn-danger"
                        type="submit"
                      >
                        REPORT{" "}
                      </button>

                      <Link to="/reportuser" className="btn btn-warning">
                        DISPLAY THE LIST
                      </Link>
                      <br></br>
                      <br></br>
                      <div className="divbtn">
                        <Link
                          to="/allpost"
                          style={{ marginTop: "" }}
                          className="btn btn-dark"
                        >
                          Go Back
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
//exporting ApproveConfirm
export default ViewReportUser;
