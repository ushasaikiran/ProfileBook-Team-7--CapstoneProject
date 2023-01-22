import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const UserListing = () => {
  const [userdata, userdatachange] = useState(null);
  const navigate = useNavigate();
  //loads the user details
  const LoadDetail = (userId) => {
    alert("Click on OK to see the details");
    navigate("/user/detail/" + userId);
  };
  //maps to update user
  const LoadEdit = (userId) => {
    alert("Click On 'OK' To Proceed Further");
    navigate("/user/update/" + userId);
  };

  //user removing function
  const Removefunction = (userId) => {
    if (window.confirm("Do you want to remove?")) {
      fetch("http://localhost:9999/api/admin/deleteUser/" + userId, {
        method: "DELETE",
      })
        .then((res) => {
          alert("User deleted successfully.");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  //used to fetch all users
  useEffect(() => {
    fetch("http://localhost:9999/api/admin/getAllUsers")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        userdatachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="container">
      <div className="card" style={{ marginTop: "1cm" }}>
        <div className="card-title">
          <h2 style={{ color: "maroon" }}>LIST OF ALL USERS</h2>
        </div>
        <div>
          <div className="divbtn">
            <Link
              to="/user/create"
              style={{ marginTop: "" }}
              className="btn btn-primary"
            >
              ADD USER HERE
            </Link>{" "}
            <Link
              to="/admin/allposts"
              style={{ marginTop: "" }}
              className="btn btn-outline-dark"
            >
              Go Back
            </Link>
            <br></br>
          </div>
          <br></br>
          <table
            className="table table-bordered"
            style={{ backgroundColor: "lightcyan" }}
          >
            <thead>
              <tr>
                <td>
                  <b>ID</b>
                </td>
                <td>
                  <b>NAME</b>
                </td>
                <td>
                  <b>EMAIL</b>
                </td>

                <td>
                  <b>MOBILE NUMBER</b>
                </td>
                <td>
                  <b>CHANGES</b>
                </td>
              </tr>
            </thead>
            <tbody>
              {userdata &&
                userdata.map((item) => (
                  <tr key={item.userId}>
                    <td>{item.userId}</td>
                    <td>{item.userName}</td>
                    <td>{item.emailId}</td>

                    <td>{item.userMobNo}</td>
                    <td>
                      <a
                        onClick={() => {
                          LoadEdit(item.userId);
                        }}
                        className="btn btn-success"
                      >
                        UPDATE USER{" "}
                      </a>
                      <a
                        onClick={() => {
                          Removefunction(item.userId);
                        }}
                        className="btn btn-danger"
                        style={{ margin: "20px" }}
                      >
                        DELETE USER
                      </a>
                      {/* <a onClick={() => { LoadDetail(item.userId) }} className="btn btn-danger">Report User</a> */}
                      <a
                        onClick={() => {
                          LoadDetail(item.userId);
                        }}
                        className="btn btn-info"
                      >
                        {" "}
                        USER-INFO
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserListing;
