import * as React from "react";

import { useNavigate } from "react-router-dom";

import AppBar from "@mui/material/AppBar";

import Box from "@mui/material/Box";

import Toolbar from "@mui/material/Toolbar";

import IconButton from "@mui/material/IconButton";

import Typography from "@mui/material/Typography";

import MenuItem from "@mui/material/MenuItem";

import Menu from "@mui/material/Menu";

import AccountCircle from "@mui/icons-material/AccountCircle";

import { Link } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);

    handleMobileMenuClose();
  };

  const handlePost = () => {
    navigate("/addpost");
  };

  const handleLogout = () => {
    alert("User Logedout Successfully");

    navigate("/");
  };

  const handleReportUser = () => {
    navigate("/reportuser");
  };

  const sendMessage = () => {
    navigate("/chathere");
  };

  const menuId = "primary-search-account-menu";

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",

        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",

        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem component={Link} to={`/userprofile`}>
        Profile
      </MenuItem>

      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",

        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",

        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <button
          size="large"
          aria-label="show AddPost new mails"
          color="inherit"
        ></button>

        <p>Add Post</p>
      </MenuItem>

      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 4 new mails"
          color="inherit"
        ></IconButton>

        <p>Messages</p>
      </MenuItem>

      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        ></IconButton>

        <p>Notifications</p>
      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>

        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  return (
    <Box>
      <AppBar position="static">
        <Toolbar style={{ backgroundColor: "lightskyblue" }}>
          <Typography variant="h6" noWrap component="div"></Typography>

          <Box />

          <Box>
            <button
              style={{ marginRight: "10px" }}
              className="btn btn-dark btn-md "
              onClick={handlePost}
            >
              POST{" "}
            </button>

            <button
              style={{ marginRight: "" }}
              className="btn btn-success btn-md "
              onClick={sendMessage}
            >
              CHAT HERE
            </button>

            <button
              style={{ marginLeft: "15px" }}
              className="btn btn-warning btn-md "
              onClick={handleReportUser}
            >
              REPORT USER
            </button>

            <button
              style={{ marginLeft: "21.6cm" }}
              type="button"
              onClick={handleLogout}
              class="btn btn-danger btn-sm"
            >
              <span class="glyphicon glyphicon-log-out"></span> SIGN OUT
            </button>
          </Box>
        </Toolbar>
      </AppBar>

      {renderMobileMenu}

      {renderMenu}
    </Box>
  );
}
