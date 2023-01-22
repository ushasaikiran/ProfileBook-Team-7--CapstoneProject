import React, { useEffect, useState } from "react";

import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import {
  deleteWaitingPost,
  getallWaitingApprove,
} from "../../service/adminpostapi";

//displays all Post bookigs need his approval
const AdminPostApproval = () => {
  //getting Ownername form localstorage
  const navigate = useNavigate();

  const [post, setPost] = useState([]);
  useEffect(() => {
    //calling getPost()
    getPost();
  }, []);

  //getting all Post bookigs need his approval
  const getPost = async () => {
    //getting and storing that Posts to variable
    const response = await getallWaitingApprove();
    //displaying all Post bookigs need his approval in console
    console.log(response);
    //assiging that all Posts to Post using setPost
    setPost(response.data);
  };

  const deleteWaitingPosts = async (postId) => {
    await deleteWaitingPost(postId);
    //delete from waiting Posts
    //calling getPost()
    getPost();
    alert("The Post has been Rejected by the Admin");
  };
  const handleClick = () => {
    alert("The Post has been Approved Successfully");
    navigate("/admin/allposts");
  };

  return (
    <div>
      <div>
        <div>
          <h2>ALL POSTS</h2>
        </div>
        <div className="card-body">
          <div>
            <Link to="/admin/allposts" className="btn btn-dark">
              GO BACK
            </Link>
          </div>
          <table
            className="table table-bordered"
            style={{ backgroundColor: "aliceblue" }}
          >
            <thead style={{ backgroundColor: "aqua" }}>
              <tr>
                <td>POST ID</td>
                <td>User Name</td>
                <td>Post Name</td>
                <td>Image</td>
                <td>Description</td>

                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {post &&
                post.map((item) => (
                  <tr key={item.postId}>
                    <td>{item.postId}</td>
                    <td>{item.userName}</td>
                    <td>{item.postName}</td>
                    <td>
                      <img
                        className="product-image"
                        src={item.postImageUrl}
                        alt="img"
                        style={{ height: "150px" }}
                      />
                      <br></br>
                    </td>
                    <td>{item.postDescription}</td>

                    <td>
                      <button
                        variant="contained"
                        className="btn btn-danger"
                        color="secondary"
                        style={{ margin: "0px 20px" }}
                        onClick={() => deleteWaitingPosts(item.postId)}
                      >
                        REJECT
                      </button>
                      <Button
                        variant="contained"
                        color="primary"
                        style={{ margin: "0px 20px" }}
                        onClick={handleClick}
                      >
                        Approve
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

//exporting OwnerApprovePost
export default AdminPostApproval;
