import React, { useState } from "react";
import {
  Container,
  Typography,
  FormControl,
  Input,
  Box,
  FormGroup,
} from "@mui/material";
import { addUser } from "../../service/adminapi";
import { useNavigate } from "react-router-dom";
import "../../App.css";

import "react-toastify/dist/ReactToastify.css";
import "./AdminRegister.css";

const initialValue = {
  adminName: "",
  emailId: "",
  adminPassword: "",
  adminMobNo: "",
};
//used to register user
const AdminRegister = () => {
  const [admin, setUser] = useState(initialValue);
  const { adminName, emailId, adminPassword, adminMobNo } = admin;
  //declering history as useNavigate()
  const history = useNavigate();

  const handleLogin = () => {
    history("/adminlogin");
  };
  const handleCancle = () => {
    history("/adminlogin");
  };
  //onchange value ()
  const onValueChange = (e) => {
    setUser({ ...admin, [e.target.name]: e.target.value });
    console.log(admin);
  };

  //used to adduser details to table
  const addUserDetails = async () => {
    if (adminName.length <= 2) {
      alert("Enter Valid Admin Name");
    } else if (emailId.length <= 2) {
      alert("Enter Valid emailId");
    } else if (adminPassword.length <= 2) {
      alert("Password Must Be Strong");
    } else if (adminMobNo.length < 10) {
      alert("Invalid Number");
    } else {
      await addUser(admin); //adding user details to table
      alert("Admin Registered Successfully"); //notifies user register successfully
      history("/adminlogin"); //naviate to another page using history.push()
    }
  };

  return (
    <div className="form" style={{ backgroundColor: "lightslategrey" }}>
      <div>
        <Container maxWidth="sm">
          <Box my={1}>
            <Typography variant="h5" align="center">
              <b>Registration Form</b>
            </Typography>
            <br></br>

            <FormGroup>
              <FormControl>
                <Input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="TYPE ADMIN NAME"
                  aria-label=".fo"
                  onChange={(e) => onValueChange(e)}
                  name="adminName"
                  value={adminName}
                />
              </FormControl>
              <br></br>
              <FormControl>
                <Input
                  className="form-control form-control-lg"
                  placeholder="EMAILID"
                  aria-label=".fo"
                  onChange={(e) => onValueChange(e)}
                  name="emailId"
                  value={emailId}
                  type="email"
                />
              </FormControl>
              <br></br>
              <FormControl>
                <Input
                  className="form-control form-control-lg"
                  placeholder="ADMIN PASSWORD"
                  aria-label=".fo"
                  onChange={(e) => onValueChange(e)}
                  name="adminPassword"
                  value={adminPassword}
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
                  name="adminMobNo"
                  value={adminMobNo}
                />
              </FormControl>
              <br></br>
              <Box my={3}>
                {/* this button is used to call addUserDetails() */}
                <button
                  className="btn btn-info"
                  variant="contained"
                  onClick={() => addUserDetails()}
                  color="primary"
                  align="center"
                >
                  Register
                </button>
                <button
                  className="btn btn-danger"
                  onClick={handleCancle}
                  variant="contained"
                  color="secondary"
                  align="center"
                  style={{ margin: "0px 20px" }}
                >
                  Cancel
                </button>
                <br></br>
                <br></br>
                Already Registered ? Please Login
                <br></br>
                <button
                  className="btn btn-primary"
                  variant="contained"
                  onClick={handleLogin}
                  color="primary"
                  align="center"
                >
                  Login
                </button>
              </Box>
            </FormGroup>
          </Box>
        </Container>
      </div>
    </div>
  );
};

//exporting UserRegister
export default AdminRegister;
