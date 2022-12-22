import { Grid } from "@mui/material";
import React, { useState } from "react";
import UserDetails from "../Components/UserDetails";
import UserList from "../Components/UserList";
import "./main.css";
const Main = () => {
  const [singleUserDetails, setSingleUserDetails] = useState({});
  const [color, setColor] = useState("black");

  const seeDetails = (data) => {
    setSingleUserDetails(data);
    setColor(color ? "red" : "black");
  };
  return (
    <Grid container className="main-container">
      <Grid item xs={12} sm={7}>
        <UserList seeDetails={seeDetails} color={color}></UserList>
      </Grid>
      <Grid item xs={12} sm={5} className="container-item">
        <UserDetails singleUserDetails={singleUserDetails}></UserDetails>
      </Grid>
    </Grid>
  );
};

export default Main;
