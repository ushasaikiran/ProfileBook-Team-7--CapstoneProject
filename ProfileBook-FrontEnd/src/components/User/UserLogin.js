import React, { useState } from "react";
import {
  Container,
  Typography,
  FormControl,
  Input,
  Box,
  FormGroup,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Login.css";

import "react-toastify/dist/ReactToastify.css";

const initialValue = {
  userName: "",
  userPassword: "",
};

//used to check the login

function UserLogin() {
  const [db, setDb] = useState(initialValue);

  const history = useNavigate();
  const navigate = useNavigate();

  const handleRegister = () => {
    history("/register");
  };

  const handleCancle = () => {
    history("/");
  };
  const onValueChange = (e) => {
    setDb({ ...db, [e.target.name]: e.target.value });
    console.log(db);
  };
  //used to check the user is present in user table ot not
  async function userPresent(data) {
    if (data.userName.length <= 2) {
      alert("INVALID USERNAME");
    } else if (data.userPassword.length <= 2) {
      alert("Password must be strong");
    } else {
      //fethcing all users data using API
      let check_data = await fetch(
        "http://localhost:9999/api/admin/getAllUsers"
      );
      let check = await check_data.json();
      let flag = false;
      console.log(check);
      for (let i = 0; i < check.length; i++) {
        //here checking user login
        if (
          check[i].userEmail === data.userEmail &&
          check[i].userPassword === data.userPassword
        ) {
          flag = true;
          //storing all user details in localstorage
          localStorage.setItem("UName", check[i].userName);
          localStorage.setItem("UId", check[i].userId);
          localStorage.setItem("UEmail", check[i].emailId);
          localStorage.setItem("UPhone", check[i].userMobNo);
        }
      }
      if (flag === true) {
        alert("Login successfull");
        //navigate to another page using history.push
        navigate("/allpost");
      } else {
        alert("ERROR! INCORRECT USER DETAILS");
      }
    }
  }
  return (
    <div className="form" style={{ backgroundColor: "lightslategrey" }}>
      <div style={{ fontFamily: "cursive" }}>
        <Container maxWidth="sm">
          <Box my={3}>
            <Typography variant="h5" align="center">
              <b>USER LOGIN</b>
            </Typography>
            <br></br>

            <div className="img text-center">
              <img src="" alt="" class="center" style={{ height: "100px" }} />
            </div>
            <FormGroup>
              <FormControl>
                <Input
                  className="form-control form-control-lg"
                  type=""
                  placeholder="USERNAME"
                  aria-label=".fo"
                  onChange={(e) => onValueChange(e)}
                  name="userName"
                  value={db.userName}
                />
              </FormControl>
              <br></br>
              <br></br>
              <FormControl>
                <Input
                  className="form-control form-control-lg"
                  type="password"
                  placeholder="PASSWORD"
                  aria-label=".fo"
                  onChange={(e) => onValueChange(e)}
                  name="userPassword"
                  value={db.userPassword}
                />
              </FormControl>
              <br></br>
              <Box my={3}>
                <button
                  className="btn btn-info"
                  variant="outlined"
                  onClick={() => userPresent(db)}
                  color="primary"
                  align="center"
                >
                  Login
                </button>
                <button
                  className="btn btn-danger"
                  onClick={handleCancle}
                  variant="outlined"
                  color="secondary"
                  align="center"
                  style={{ margin: "20px" }}
                >
                  Cancel
                </button>
                <br></br>
                <br></br>
                New User Registration <br></br>
                <button
                  className="btn btn-primary"
                  variant="outlined"
                  onClick={handleRegister}
                  color="primary"
                  align="center"
                >
                  Register
                </button>
                <br></br>
                <br></br>
              </Box>
            </FormGroup>
          </Box>
        </Container>
      </div>
    </div>
  );
}
//exporting UserLogin
export default UserLogin;
