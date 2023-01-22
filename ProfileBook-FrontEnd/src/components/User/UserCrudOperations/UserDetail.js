import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const UserDetail = () => {
  const { userId } = useParams();

  const [userdata, userdatachange] = useState({});

  //fetch specific user details by id
  useEffect(() => {
    fetch("http://localhost:9999/api/admin/getUserById/" + userId)
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
    <div className="form" style={{ backgroundColor: "lightblue" }}>
      <div style={{ margin: "1cm 2cm" }}>
        <div style={{ fontFamily: "cursive" }}>
          <div>
            <h2>
              <u>
                <b>USER DETAILS</b>
              </u>
            </h2>
            <br></br>
          </div>
          <div className="card-body"></div>

          {userdata && (
            <div style={{ fontFamily: "cursive", color: "black" }}>
              <h4>
                {" "}
                NAME : <b>{userdata.userName}</b>{" "}
              </h4>
              <br></br>

              <h2>
                EMAIL <br></br> {userdata.emailId}
              </h2>
              <br></br>
              <h2>
                PASSWORD <br></br> {userdata.userPassword}
              </h2>
              <br></br>
              <h2>
                CONTACT <br></br> {userdata.userMobNo}
              </h2>
              <br></br>
              <br></br>

              <Link className="btn btn-warning" to="/usercrud">
                DISPLAY LIST
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

export default UserDetail;
