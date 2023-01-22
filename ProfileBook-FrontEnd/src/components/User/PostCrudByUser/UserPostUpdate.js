import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const UserPostUpdate = () => {
  const { postId } = useParams();

  //const [userdata, userdatachange] = useState({});

  //used to update a user by id

  useEffect(() => {
    fetch("http://localhost:9999/api/users/updatePost" + postId)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        idchange(resp.id);

        namechange(resp.userName);

        passwordchange(resp.userPassword);

        postnamechange(resp.postName);

        descriptionchange(resp.postDescription);

        urlchange(resp.postImageUrl);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });

  const [id, idchange] = useState("");

  const [userName, namechange] = useState("");

  const [userPassword, passwordchange] = useState("");

  const [postName, postnamechange] = useState("");

  const [postImageUrl, urlchange] = useState("");

  const [postDescription, descriptionchange] = useState("");

  // const [active, activechange] = useState(true);

  const [validation, valchange] = useState(false);

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();

    const postdata = {
      postId,
      userName,
      userPassword,
      postName,
      postImageUrl,
      postDescription,
    };

    //put method to update a user by specific user id

    fetch("http://localhost:9999/api/users/updatePost/", {
      method: "PUT",

      headers: { "content-type": "application/json" },

      body: JSON.stringify(postdata),
    })
      .then((res) => {
        alert(" post Updated successfully.");

        navigate("/allpost");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <h2>
        <u>EDIT POST DETAILS</u>
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
                      <label style={{ color: "black" }}>
                        {" "}
                        <b>ID</b>
                      </label>

                      <input
                        value={postId}
                        disabled="disabled"
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label style={{ color: "black" }}>
                        {" "}
                        <b>USER NAME</b>
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
                        {" "}
                        <b>TYPE YOUR PASSWORD</b>
                      </label>

                      <input
                        required
                        value={userPassword}
                        onMouseDown={(e) => valchange(true)}
                        onChange={(e) => passwordchange(e.target.value)}
                        className="form-control"
                      ></input>

                      {userPassword.length === 0 && validation && (
                        <span className="text-danger">
                          Password is Mandatory
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label style={{ color: "black" }}>
                        <b>POST NAME</b>
                      </label>

                      <input
                        value={postName}
                        required
                        onChange={(e) => postnamechange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label style={{ color: "black" }}>
                        <b>URL</b>
                      </label>

                      <input
                        value={postImageUrl}
                        onChange={(e) => urlchange(e.target.value)}
                        required
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label style={{ color: "black" }}>
                        {" "}
                        <b>DESCRIPTION</b>
                      </label>

                      <input
                        value={postDescription}
                        required
                        onChange={(e) => descriptionchange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  {/* <div className="col-lg-12">
  
  
  
                                          <div className="form-check">
  
  
  
                                              <input checked={active} onChange={e => activechange(e.target.checked)} type="checkbox" className="form-check-input"></input>
  
  
  
                                              <label className="form-check-label">Is Active</label>
  
  
  
  
  
                                          </div>
  
  
  
                                      </div> */}

                  <div className="col-lg-12">
                    <div className="form-group">
                      <button
                        style={{ margin: "20px" }}
                        className="btn btn-success"
                        type="submit"
                      >
                        UPDATE POST
                      </button>

                      <Link to="/userpostlist" className="btn btn-danger">
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

export default UserPostUpdate;
