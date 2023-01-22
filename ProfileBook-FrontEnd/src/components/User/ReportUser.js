import React, { useEffect, useState } from "react";

import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { getallUsers } from "../../service/userapi";
import "../../App.css";

//displays all User bookigs need his approval
const ReportUser = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    //calling getUser()
    getUser();
  }, []);

  //getting all User bookigs need his approval
  const getUser = async () => {
    //getting and storing that Users to variable
    const response = await getallUsers();
    //displaying all User bookigs need his approval in console
    console.log(response);
    //assiging that all Users to User using setUser
    setUser(response.data);
  };

  return (
    <div className="container">
      <div className="card" style={{ marginTop: "1cm" }}>
        <div className="card-title">
          <h2 style={{ color: "maroon" }}>
            SELECT ANY USER YOU WANT TO REPORT
          </h2>
        </div>
        <div>
          <div className="divbtn">
            <Link
              to="/allpost"
              style={{ marginTop: "" }}
              className="btn btn-outline-dark"
            >
              Go Back
            </Link>
          </div>
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
                  <b>USER NAME</b>
                </td>
                <td>
                  <b>EMAIL ID</b>
                </td>
                <td>
                  <b>MOBILE NUMBER</b>
                </td>
                <td>
                  <b>REPORT HERE</b>
                </td>
              </tr>
            </thead>
            <tbody>
              {user &&
                user.map((item) => (
                  <tr key={item.userId}>
                    <td>{item.userId}</td>
                    <td>{item.userName}</td>
                    <td>{item.emailId}</td>

                    <td>{item.userMobNo}</td>
                    <td>
                      {" "}
                      <Button
                        variant="contained"
                        color="error"
                        style={{ margin: "0px 20px" }}
                        component={Link}
                        to={`/reported/${item.userId}`}
                      >
                        Report User
                      </Button>
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

//exporting OwnerApproveUser
export default ReportUser;
