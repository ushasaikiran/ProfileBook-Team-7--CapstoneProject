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
import "./AdminRegister.css";

import "react-toastify/dist/ReactToastify.css";

const initialValue = {
  adminName: "",
  adminPassword: "",
};

//used to check the login
function AdminLogin() {
  const [db, setDb] = useState(initialValue);
  const history = useNavigate();
  const navigate = useNavigate();
  const handleRegister = () => {
    history("/adminregister");
  };
  const handleCancle = () => {
    history("/");
  };
  const onValueChange = (e) => {
    setDb({ ...db, [e.target.name]: e.target.value });
    console.log(db);
  };
  //used to check the admin is present in admin table ot not
  async function adminPresent(data) {
    if (data.adminName.length <= 2) {
      alert("AdminName Should be more than 2 characters");
    } else if (data.adminPassword.length <= 2) {
      alert("Password Should be more than 2 characters");
    } else {
      //fethcing all admin data using API
      let check_data = await fetch("http://localhost:9999/api/admin/getadmins");
      let check = await check_data.json();
      let flag = false;
      console.log(check);
      for (let i = 0; i < check.length; i++) {
        //here checking admin login
        if (
          check[i].adminName === data.adminName &&
          check[i].adminPassword === data.adminPassword
        ) {
          flag = true;

          localStorage.setItem("UName", check[i].adminName);
          localStorage.setItem("UId", check[i].adminId);
          localStorage.setItem("UEmail", check[i].emailId);
          localStorage.setItem("UPhone", check[i].adminMobNo);
        }
      }
      if (flag === true) {
        alert("Login success");

        navigate("/admin/allposts");
      } else {
        alert("Enter Correct Admin details");
      }
    }
  }
  return (
    <div className="form" style={{ backgroundColor: "lightslategrey" }}>
      <div>
        <Container maxWidth="sm">
          <Box my={2}>
            <Typography variant="h5" align="center">
              <b>ADMIN LOGIN</b>
            </Typography>
            <br></br>
            <br></br>
            <div className="img text-center"></div>
            <FormGroup>
              <FormControl>
                <Input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="ADMINNAME"
                  aria-label=".fo"
                  onChange={(e) => onValueChange(e)}
                  name="adminName"
                  value={db.adminName}
                />
              </FormControl>
              <br></br>
              <br></br>

              <FormControl>
                <Input
                  className="form-control form-control-lg"
                  placeholder="PASSWORD"
                  aria-label=".fo"
                  onChange={(e) => onValueChange(e)}
                  name="adminPassword"
                  value={db.adminPassword}
                  type="password"
                />
              </FormControl>
              <br></br>
              <Box my={3}>
                {/* this button is used to call adminPresent() */}
                <button
                  className="btn btn-info"
                  variant="outlined"
                  onClick={() => adminPresent(db)}
                  color="primary"
                  align="center"
                >
                  Login
                </button>
                <button
                  className="btn btn-danger"
                  onClick={handleCancle}
                  variant="outlined"
                  color="primary"
                  align="center"
                  style={{ margin: "0px 20px" }}
                >
                  Cancel
                </button>
                <br></br>
                <br></br>
                <b>Register Here</b>
                <br></br>
                <br></br>
                <button
                  className="btn btn-dark"
                  variant="outlined"
                  onClick={handleRegister}
                  color="primary"
                  align="center"
                >
                  Register
                </button>
                {/* <Link to ="/register">Register</Link> */}
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
//exporting adminLogin
export default AdminLogin;
