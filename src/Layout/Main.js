import { Grid } from "@mui/material";
import React from "react";
import UserDetails from "../Components/UserDetails";
import UserList from "../Components/UserList";
import "./main.css";
const Main = () => {
  return (
    <Grid container className="main-container">
      <Grid item xs={12} sm={7}>
        <UserList></UserList>
      </Grid>
      <Grid item xs={12} sm={5} className="container-item">
        <UserDetails></UserDetails>
      </Grid>
    </Grid>
  );
};

export default Main;
