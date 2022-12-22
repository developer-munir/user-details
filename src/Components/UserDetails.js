import { Avatar, Box, Stack, TextField } from "@mui/material";
import React from "react";
import "./component.css";

const UserDetails = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "black",
          color: "white",
          padding: "10px 0",
          textAlign: "center",
        }}
      >
        <h1>User Details</h1>
      </Box>
      <div>
        <Box sx={{ textAlign: "center", paddingTop: "5px" }}>
          <Stack>
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ margin: "0 auto", width: 156, height: 156 }}
            />
            <h4>Munir Hossain Juwel</h4>
          </Stack>
        </Box>

        <Box sx={{ padding: "20px" }}>
          <Box
            sx={{
              border: "2px solid rgb(247, 247, 247)",
              padding: "5px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            laboriosam quae ab blanditiis fugiat itaque atque possimus! Repellat
            excepturi obcaecati ut vero aspernatur, voluptates blanditiis
            perspiciatis quis fugit, reprehenderit id?
          </Box>
          <Box sx={{ marginTop: "10px", padding: "5px" }}>
            <form className="form-style">
              <label htmlFor="Full Name">Full Name</label>
              <Box>
                <input type="text" name="" id="" className="input-style" />
              </Box>
            </form>
          </Box>
          <Box sx={{ marginTop: "10px", padding: "5px" }}>
            <form className="form-style">
              <label htmlFor="Full Name">Job Title</label>
              <Box>
                <input type="text" name="" id="" className="input-style" />
              </Box>
            </form>
          </Box>
          <Box sx={{ marginTop: "10px", padding: "5px" }}>
            <form className="form-style">
              <label htmlFor="Full Name">Email</label>
              <Box>
                <input type="text" name="" id="" className="input-style" />
              </Box>
            </form>
          </Box>
        </Box>
      </div>
    </Box>
  );
};

export default UserDetails;
