import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const UserDetailsByAdmin = () => {
  const { userId } = useParams();
  const [userdata, userdatachange] = useState({});
  useEffect(() => {
    fetch("http://localhost:9999/api/users/getUserById/" + userId)
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
    <div>
      <div>
        <div style={{ textAlign: "left" }}>
          <div>
            <h2>User Creation</h2>
          </div>
          <div className="card-body"></div>
          {userdata && (
            <div>
              <h2>
                The User name is : <b>{userdata.userName}</b> ({userdata.userId}
                )
              </h2>
              <h3>User Details</h3>
              <h5>Email is : {userdata.userEmail}</h5>
              <h5>Password is : {userdata.userPassword}</h5>
              <h5>Phone Number : {userdata.userPhone}</h5>
              <Link className="btn btn-danger" to="/usercrud">
                Back to Listing
              </Link>
            </div>
          )}
        </div>
      </div>
      {/* </div>
</div> */}
    </div>
  );
};

export default UserDetailsByAdmin;
