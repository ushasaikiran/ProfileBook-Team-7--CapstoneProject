import React, { useEffect, useState } from "react";

import "../../App.css";

import { getallReportUsers } from "../../service/adminpostapi";

const ListReportUser = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    //calling getUser()
    getUser();
  }, []);

  //getting all User
  const getUser = async () => {
    //getting and storing that Users to variable
    const user = await getallReportUsers();
    //displaying all Reported userin console
    console.log(user);
    //assiging that all Users to Report using setUser
    setUser(user.data);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>Reported User</h2>
        </div>
        <div className="card-body">
          <div className="divbtn">
            {/* <Link to="/post/create" className="btn btn-success">Add New (+)</Link> */}
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>UserId</td>
                <td>User Name</td>
                <td>User Email</td>
                <td>User Phone</td>
                <td>User Password</td>
              </tr>
            </thead>
            <tbody>
              {user &&
                user.map((item) => (
                  <tr key={item.userId}>
                    <td>{item.userId}</td>
                    <td>{item.userName}</td>
                    <td>{item.userEmail}</td>
                    <td> {item.userPassword}</td>
                    <td>{item.userPhone}</td>
                    {/* this button is used to Approve the pending User booking  */}
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
export default ListReportUser;
