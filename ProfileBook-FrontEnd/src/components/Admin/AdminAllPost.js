import { useEffect, useState } from "react";

import { getallPosts } from "../../service/postapi";
import "../../App.css";

import * as React from "react";

import AdminHeader from "./AdminHeader";

//displays all Posts
const AllUserPosts = () => {
  const [Post, setPost] = useState([]);
  useEffect(() => {
    //cllaing getPost method
    getPost();
  }, []);

  //getting Post
  const getPost = async () => {
    //getting and storing all Posts in response variable
    const response = await getallPosts();
    //displaying all Post deatils in console
    console.log(response);
    //assigning Post details to Post by using setPost
    setPost(response.data);
  };

  return (
    <div>
      <AdminHeader />
      {Post
        ? Post.map((data) => (
            <div>
              <div className="form">
                <div>
                  <center>
                    <div key={data.id}></div>
                    <div className="product-name">
                      <b style={{ fontSize: "0.8cm" }}>{data.userName}</b>
                    </div>
                    <br></br>
                    <img
                      className="product-image"
                      src={data.postImageUrl}
                      alt="Mypost"
                      style={{ height: "200px" }}
                    />
                    <br></br>

                    <div className="product-name">
                      <b style={{ fontSize: "0.7cm" }}>{data.postName}</b>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="product-price">
                      <br></br>
                      <b> {data.postDescription}</b>
                    </div>

                    {/* <div className="product-price">
                      HashTag :
                      <br>
                      </br> {data.postHashTag}
                    </div>
                    <br></br> */}
                    <div>
                      <div></div>
                      <div></div>
                    </div>
                    <br />
                    <br />
                  </center>
                </div>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};
//exporting AllPosts
export default AllUserPosts;
