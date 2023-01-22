import { useEffect, useState } from "react";
import {
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  makeStyles,
  Button,
} from "@mui/material";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { getallPosts, deletePost } from "../../service/postapi";
import "./Login.css";
import Header from "./Header";
import * as React from "react";
import Box from "@mui/joy/Box";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Textarea from "@mui/joy/Textarea";
import IconButton from "@mui/joy/IconButton";
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import FormatBold from "@mui/icons-material/FormatBold";
import FormatItalic from "@mui/icons-material/FormatItalic";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Check from "@mui/icons-material/Check";
import Typography from "@mui/joy/Typography";

//displays all Posts
const AllPosts = () => {
  const [italic, setItalic] = React.useState(false);
  const [fontWeight, setFontWeight] = React.useState("normal");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [text, setText] = React.useState("");
  const addEmoji = (emoji) => () => setText(`${text}${emoji}`);
  const navigate = useNavigate();
  let count = 0;

  const handleLike = () => {
    count++;
  };

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

  //method to delete Post details
  const deletePosts = async (id) => {
    await deletePost(id); //delete Post details from Post table
    //calling getPost function
    getPost();
  };

  const positionRef = React.useRef({
    x: 0,
    y: 0,
  });
  const popperRef = React.useRef(null);
  const areaRef = React.useRef(null);

  const handleMouseMove = (event) => {
    positionRef.current = { x: event.clientX, y: event.clientY };

    if (popperRef.current != null) {
      popperRef.current.update();
    }
  };
  
  const handleClick =()=>{
    navigate("/allpost")

  }

  //displaying Post details afetr admin approves the Post
  return (
    <div>
      <Header /><br></br>
    <div>
      <form>
    🔎 <input type="search
      " placeholder="Search Here..." style={{margin:"10px"}} ></input>
      <button className="btn btn-success" type= "submit" onClick={handleClick}>Search</button>

      </form>
    </div>
    
      {Post
        ? Post.map((data) => (
            <div>
              <div className="form">
                <div >
                  <center>
                    <div key={data.id}></div>
                    <div className="product-name">
                     <b> User Name </b>:<b> {data.userName} </b>
                    </div>
                    <br></br>
                    <img
                      className="product-image"
                      src={data.postImageUrl}
                      alt="img"
                      style={{ height: "200px" }}
                    />
                    <br></br>

                    <div className="product-name">
                    <b> POST NAME  </b>:<b> {data.postName} </b>
                    </div>
                    <br></br>
                    <div className="product-price">
                    <b> DESCRIPTION </b>:<b> {data.postDescription} </b>
                    </div>
                    <br></br>
                    <div>
                      <div>
                        <Textarea
                        
                          value={text}
                          onChange={(event) => setText(event.target.value)}
                          minRows={2}
                          maxRows={4}
                          startDecorator={
                            <Box >
                              <button
                              className="btn btn-primary"
                                variant="outlined"
                                color="neutral"
                                onClick={addEmoji("💕")}
                              >
                                Like
                              </button>

                           
                            </Box>
                          }
                          endDecorator={
                            <Typography level="body3" sx={{ ml: "auto" }}>
                              {/* {text.length} character(s) */}
                            </Typography>
                          }
                          sx={{ minWidth: 300 }}
                        />
                      </div>
                      <div>
                        <FormControl>
                          <FormLabel>Your comment</FormLabel>
                          <Textarea
                                                       minRows={3}
                            endDecorator={
                              <Box
                           
                              >
                                <IconButton
                                  variant="plain"
                                  color="neutral"
                                  onClick={(event) =>
                                    setAnchorEl(event.currentTarget)
                                  }
                                >
                               
                                </IconButton>
                                <Menu
                                  anchorEl={anchorEl}
                                  open={Boolean(anchorEl)}
                                  onClose={() => setAnchorEl(null)}
                                  size="sm"
                                  placement="bottom-start"
                                  sx={{ "--List-decorator-size": "24px" }}
                                >
                                  {["200", "normal", "bold"].map((weight) => (
                                    <MenuItem
                                      key={weight}
                                      selected={fontWeight === weight}
                                      onClick={() => {
                                        setFontWeight(weight);
                                        setAnchorEl(null);
                                      }}
                                      sx={{ fontWeight: weight }}
                                    >
                                      <ListItemDecorator>
                                        {fontWeight === weight && (
                                          <Check fontSize="sm" />
                                        )}
                                      </ListItemDecorator>
                                      {weight === "200" ? "lighter" : weight}
                                    </MenuItem>
                                  ))}
                                </Menu>
                                {/* <IconButton
                                  variant={italic ? "soft" : "plain"}
                                  color={italic ? "primary" : "neutral"}
                                  aria-pressed={italic}
                                  onClick={() => setItalic((bool) => !bool)}
                                >
                                  <FormatItalic />
                                </IconButton> */}
                                {/* <Button sx={{ ml: 'auto' }}>Send</Button> */}
                              </Box>
                            }
                            // sx={{
                            //   minWidth: 300,
                            //   fontWeight,
                            //   fontStyle: italic ? "italic" : "initial",
                            // }}
                          />
                        </FormControl>
                      </div>
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
export default AllPosts;
