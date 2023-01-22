import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const UserPostListing = () => {
  const [userdata, userdatachange] = useState(null);
  const navigate = useNavigate();
  //loads the user details

  //maps to update user
  const LoadEdit = (postId) => {
    navigate("/post/update/" + postId);
  };

  //user removing function
  const Removefunction = (postId) => {
    if (window.confirm("Do you want to remove?")) {
      fetch("http://localhost:9999/api/users/deletePostById/" + postId, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Post deleted successfully.");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  //used to fetch all users
  useEffect(() => {
    fetch("http://localhost:9999/api/users/getPosts")
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
          <h2 style={{ color: "maroon" }}>LIST OF ALL POSTS</h2>
        </div>
        <div>
          <div className="divbtn">
            <Link
              to="/addpost"
              style={{ marginRight: "20px" }}
              className="btn btn-primary"
            >
              ADD POST
            </Link>
            <Link
              to="/allpost"
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
                  <b>POST NAME</b>
                </td>
                <td>
                  <b>USER NAME</b>
                </td>
                <td>
                  <b>IMAGE</b>
                </td>
                <td>
                  <b>DESCRIPTION</b>
                </td>
                <td>
                  <b>CHANGES</b>
                </td>
              </tr>
            </thead>
            <tbody>
              {userdata &&
                userdata.map((item) => (
                  <tr key={item.postId}>
                    <td>{item.postId}</td>
                    <td>{item.postName}</td>
                    <td>{item.userName}</td>
                    <td>
                      <img
                        className="product-image"
                        src={item.postImageUrl}
                        alt="mypost"
                        style={{ height: "200px" }}
                      ></img>
                    </td>

                    <td>{item.postDescription}</td>
                    <td>
                      <a
                        onClick={() => {
                          Removefunction(item.postId);
                        }}
                        className="btn btn-danger"
                        style={{ margin: "20px" }}
                      >
                        DELETE POST
                      </a>

                      <a
                        onClick={() => {
                          LoadEdit(item.postId);
                        }}
                        className="btn btn-success"
                      >
                        EDIT POST
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
export default UserPostListing;
