import React, { useState } from "react";
import {
  Container,
  Typography,
  FormControl,
  Input,
  Box,
  FormGroup,
  Button,
} from "@mui/material";
import { addUser } from "../../service/userapi";
import { useNavigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import "./Register.css";

const initialValue = {
  userName: "",
  emailId: "",
  userPassword: "",
  userMobNo: "",
};
//used to register user
const UserRegister = () => {
  const [user, setUser] = useState(initialValue);
  const { userName, emailId, userPassword, userMobNo } = user;
  //declering history as useNavigate()
  const history = useNavigate();

  const handleLogin = () => {
    history("/login");
  };
  const handleCancle = () => {
    history("/login");
  };
  //onchange value ()
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  //used to adduser details to table
  const addUserDetails = async () => {
    if (userName.length <= 2) {
      alert("INVALID DETAILS");
    } else if (emailId.length <= 2) {
      alert("INVALID DETAILS");
    } else if (userPassword.length <= 2) {
      alert("INVALID DETAILS");
    } else if (userMobNo.length < 9) {
      alert("INVALID DETAILS");
    } else {
      await addUser(user); //adding user details to table
      alert("User Registered Successfully"); //notifies user register successfully
      history("/login"); //naviate to another page using history
    }
  };

  return (
    <div
      className="form"
      style={{ backgroundColor: "lightslategrey", fontFamily: "cursive" }}
    >
      <div>
        <Container maxWidth="sm">
          <Box my={-1}>
            <Typography variant="h5" align="center">
              <b>User Registration Form</b>
            </Typography>
            <br></br>
            <br></br>

            <FormGroup>
              <FormControl>
                <Input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="USER NAME"
                  aria-label=".fo"
                  onChange={(e) => onValueChange(e)}
                  name="userName"
                  value={userName}
                />
              </FormControl>
              <br></br>
              <FormControl>
                <Input
                  className="form-control form-control-lg"
                  type="email"
                  placeholder="ABC@gmail.com"
                  aria-label=".fo"
                  onChange={(e) => onValueChange(e)}
                  name="emailId"
                  value={emailId}
                />
              </FormControl>
              <br></br>
              <FormControl>
                <Input
                  className="form-control form-control-lg"
                  placeholder="PASSWORD"
                  aria-label=".fo"
                  onChange={(e) => onValueChange(e)}
                  name="userPassword"
                  value={userPassword}
                  type="password"
                />
              </FormControl>
              <br></br>
              <FormControl>
                <Input
                  className="form-control form-control-lg"
                  type="number"
                  placeholder="NUMBER"
                  aria-label=".fo"
                  onChange={(e) => onValueChange(e)}
                  name="userMobNo"
                  value={userMobNo}
                />
              </FormControl>
              <br></br>
              <Box my={3}>
                <Button
                  variant="contained"
                  onClick={() => addUserDetails()}
                  color="info"
                  align="center"
                >
                  Register
                </Button>
                <Button
                  onClick={handleCancle}
                  variant="contained"
                  color="error"
                  align="center"
                  style={{ margin: "0px 20px" }}
                >
                  Cancel
                </Button>
                <br></br>
                <br></br>
                <br></br>
                Already Registered ? Please Login
                <br></br>
                <Button
                  variant="contained"
                  onClick={handleLogin}
                  color="primary"
                  align="center"
                >
                  Login
                </Button>
              </Box>
            </FormGroup>
          </Box>
        </Container>
      </div>
    </div>
  );
};

//exporting UserRegister
export default UserRegister;
