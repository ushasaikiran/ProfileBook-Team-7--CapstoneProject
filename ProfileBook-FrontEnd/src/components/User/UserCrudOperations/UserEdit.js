import { useEffect, useState } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";

const UserEdit = () => {
  const { userId } = useParams();

  //const [userdata, userdatachange] = useState({});

  //used to update a user by id

  useEffect(() => {
    fetch("http://localhost:9999/api/admin/updateUser" + userId)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        idchange(resp.id);

        namechange(resp.userName);

        emailchange(resp.userEmail);

        passwordchange(resp.userPassword);

        mobilechange(resp.userMobNo);

        activechange(resp.isactive);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const [id, idchange] = useState("");

  const [userName, namechange] = useState("");

  const [emailId, emailchange] = useState("");

  const [userPassword, passwordchange] = useState("");

  const [userMobNo, mobilechange] = useState("");

  const [active, activechange] = useState(true);

  const [validation, valchange] = useState(false);

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();

    const userdata = {
      userId,
      userName,
      emailId,
      userPassword,
      userMobNo,
      active,
    };

    //put method to update a user by specific user id

    fetch("http://localhost:9999/api/admin/updateUser/", {
      method: "PUT",

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
        <u>EDIT USER DETAILS</u>
      </h2>

      <div className="row">
        <div style={{ marginTop: "1.5cm" }} className="offset-lg-3 col-lg-6">
          <form onSubmit={handlesubmit}>
            <div style={{ textAlign: "left" }}>
              <div style={{ textAlign: "center" }} className="container"></div>

              <div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label style={{ color: "white" }}>
                        {" "}
                        <b>ID</b>
                      </label>

                      <input
                        value={userId}
                        disabled="disabled"
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label style={{ color: "white" }}>
                        {" "}
                        <b>Enter UserName</b>
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
                        <b>EmailId</b>
                      </label>

                      <input
                        value={emailId}
                        required
                        onChange={(e) => emailchange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label style={{ color: "white" }}>
                        <b>password</b>
                      </label>

                      <input
                        value={userPassword}
                        onChange={(e) => passwordchange(e.target.value)}
                        required
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label style={{ color: "white" }}>
                        {" "}
                        <b>Mobile Number</b>
                      </label>

                      <input
                        value={userMobNo}
                        required
                        onChange={(e) => mobilechange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <button
                        style={{ margin: "20px" }}
                        className="btn btn-success"
                        type="submit"
                      >
                        UPDATE
                      </button>

                      <Link to="/usercrud" className="btn btn-danger">
                        GO BACK
                      </Link>
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

export default UserEdit;
