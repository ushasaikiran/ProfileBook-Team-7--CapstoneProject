import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ReportedUserList = () => {
  const [reporteduser, userdatachange] = useState(null);

  const Removefunction = (reportId) => {
    if (window.confirm("Do you want to Report This User?")) {
      fetch("http://localhost:9999/api/reportedUsers/reportUser/" + reportId, {
        method: "DELETE",
      })
        .then((res) => {
          alert("User is reported successfully");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  //used to fetch all users
  useEffect(() => {
    fetch("http://localhost:9999/api/reportedUsers/getReportedUser")
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
              to="/admin/allposts"
              style={{ marginTop: "" }}
              className="btn btn-outline-dark"
            >
              Go Back
            </Link>
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
                  <b>REASON</b>
                </td>
                <td>
                  <b>REPORT</b>
                </td>
              </tr>
            </thead>
            <tbody>
              {reporteduser &&
                reporteduser.map((item) => (
                  <tr key={item.reportId}>
                    <td>{item.reportId}</td>
                    <td>{item.userName}</td>
                    <td>{item.emailId}</td>
                    <td>{item.userMobNo}</td>
                    <td>{item.reason}</td>
                    <td>
                      <button
                        onClick={() => Removefunction(item.reportId)}
                        className="btn btn-danger"
                        style={{ margin: "20px" }}
                      >
                        Report This User
                      </button>
                      {/* <a onClick={() => { LoadDetail(item.userId) }} className="btn btn-danger">Report User</a> */}
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
export default ReportedUserList;
