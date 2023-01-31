import React from "react";
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Box,
  Tabs,
  Tab,
} from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";

const Header = () => {
  const dispatch=useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  const [value, setValue] = useState();

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h4">Blogs</Typography>
          <Box display="flex" marginLeft={"auto"} marginRight="auto">
            {isLoggedIn && (
              <Tabs
                textColor="inherit"
                value={value}
                onChange={(e, val) => setValue(val)}
              >
                <Tab
                  // className={classes.font}
                  LinkComponent={Link}
                  to="/blogs"
                  label="All Blogs"
                />
                <Tab
                  // className={classes.font}
                  LinkComponent={Link}
                  to="/myBlogs"
                  label="My Blogs"
                />
                <Tab
                  // className={classes.font}
                  LinkComponent={Link}
                  to="/blogs/add"
                  label="Add Blog"
                />
              </Tabs>
            )}
          </Box>
          <Box display="flex" marginLeft="auto">
            {!isLoggedIn && (
              <>
                <Button
                  LinkComponent={Link}
                  to="/auth"
                  variant="contained"
                  color="warning"
                >
                  Login
                </Button>
                <Button
                  LinkComponent={Link}
                  to="/auth"
                  variant="contained"
                  color="warning"
                >
                  SignUp
                </Button>
              </>
            )}
            {isLoggedIn && (
              <Button
                LinkComponent={Link}
                to="/auth"
                variant="contained"
                color="warning"
                onClick={()=>dispatch(authActions.logout())}
              >
                LogOut
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
