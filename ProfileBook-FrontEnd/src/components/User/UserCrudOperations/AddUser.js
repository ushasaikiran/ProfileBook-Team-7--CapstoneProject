import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddUser = () => {
  //const [userId, idchange] = useState("");
  const [userName, namechange] = useState("");
  const [emailId, emailchange] = useState("");
  const [userPassword, passwordchange] = useState("");
  const [userMobNo, phonechange] = useState("");
  const [active, activechange] = useState(true);
  const [validation, valchange] = useState(false);

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    const userdata = { userName, emailId, userPassword, userMobNo, active };

    fetch("http://localhost:9999/api/admin/addUser/", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userdata),
    })
      .then((res) => {
        alert("Saved successfully.");
        navigate("/usercrud");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <h2>
        <u>ADD USER</u>
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
                      <label style={{ color: "white" }}>
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
                      <label style={{ color: "white" }}>
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
                      <label style={{ color: "white" }}>
                        {" "}
                        <b>password </b>
                      </label>
                      <input
                        type="password"
                        value={userPassword}
                        onChange={(e) => passwordchange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label style={{ color: "white" }}>
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
                        className="btn btn-primary"
                        type="submit"
                      >
                        ADD{" "}
                      </button>

                      <Link to="/usercrud" className="btn btn-warning">
                        DISPLAY THE USER LIST
                      </Link>
                      <br></br>
                      <br></br>
                      <div className="divbtn">
                        <Link
                          to="/admin/allposts"
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

export default AddUser;
