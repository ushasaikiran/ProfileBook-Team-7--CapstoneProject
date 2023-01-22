import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import "../../App.css";

import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

//used to add post details to table
const Addpost = () => {
  //const [userId, idchange] = useState("");
  const [userName, namechange] = useState("");
  const [postName, postnamechange] = useState("");
  const [postImageUrl, urlchange] = useState("");
  const [postDescription, descriptionchange] = useState("");
  // const [active, activechange] = useState(true);
  const [validation, valchange] = useState(false);

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    const userdata = { userName, postName, postImageUrl, postDescription };

    fetch("http://localhost:9999/api/users/addPost/", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userdata),
    })
      .then((res) => {
        alert("Post Added successfully.");
        navigate("/postcrud");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <h2>
        <u>ADD POST</u>
      </h2>

      <div className="row">
        <div style={{ marginTop: "1.5cm" }} className="offset-lg-3 col-lg-6">
          <form onSubmit={handlesubmit}>
            <div style={{ textAlign: "left" }}>
              <div className="container"></div>
              <div>
                <div className="row">
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
                  <br></br>
                  <br></br>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label style={{ color: "black" }}>
                        <b> POST NAME </b>
                      </label>
                      <input
                        required
                        value={postName}
                        onMouseDown={(e) => valchange(true)}
                        onChange={(e) => postnamechange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  <br></br>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label style={{ color: "black" }}>
                        {" "}
                        <b>URL </b>
                      </label>
                      <input
                        required
                        type="url"
                        value={postImageUrl}
                        onMouseDown={(e) => valchange(true)}
                        onChange={(e) => urlchange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label style={{ color: "black" }}>
                        <b> DESCRIPTION</b>
                      </label>
                      <input
                        required
                        value={postDescription}
                        onMouseDown={(e) => valchange(true)}
                        onChange={(e) => descriptionchange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  <br></br>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <button
                        style={{ marginRight: "20px" }}
                        className="btn btn-primary"
                        type="submit"
                      >
                        ADD POST{" "}
                      </button>

                      <Link to="/userpostlist" className="btn btn-warning">
                        DISPLAY THE POST LIST
                      </Link>
                      <br></br>
                      <br></br>
                      <div className="divbtn">
                        <Link
                          to="/allpost"
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

//exporting Addpost
export default Addpost;
