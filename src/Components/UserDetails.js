import { Avatar, Box, Stack, TextField } from "@mui/material";
import React from "react";
import "./component.css";
import Spinner from "./Spinner";

const UserDetails = ({ singleUserDetails }) => {
  const { Bio, profile, jobTitle } = singleUserDetails;
  const fullName = `${profile?.firstName} ${profile?.lastName}`;
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
      {singleUserDetails ? (
        <div>
          <Box sx={{ textAlign: "center", paddingTop: "5px" }}>
            <Stack>
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ margin: "0 auto", width: 156, height: 156 }}
              />
              <h4>{profile?.username}</h4>
            </Stack>
          </Box>

          <Box sx={{ padding: "20px" }}>
            <Box
              sx={{
                border: "2px solid rgb(247, 247, 247)",
                padding: "5px",
                minHeight: "100px",
              }}
            >
              <p>{Bio}</p>
            </Box>
            <Box sx={{ marginTop: "10px", padding: "5px" }}>
              <form className="form-style">
                <label htmlFor="Full Name">Full Name</label>
                <Box>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder={fullName ? fullName : ""}
                    readOnly
                    className="input-style"
                  />
                </Box>
              </form>
            </Box>
            <Box sx={{ marginTop: "10px", padding: "5px" }}>
              <form className="form-style">
                <label htmlFor="Full Name">Job Title</label>
                <Box>
                  <input
                    type="text"
                    name=""
                    placeholder={jobTitle}
                    readOnly
                    id=""
                    className="input-style"
                  />
                </Box>
              </form>
            </Box>
            <Box sx={{ marginTop: "10px", padding: "5px" }}>
              <form className="form-style">
                <label htmlFor="Full Name">Email</label>
                <Box>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder={profile?.email}
                    readOnly
                    className="input-style"
                  />
                </Box>
              </form>
            </Box>
          </Box>
        </div>
      ) : (
        <Spinner></Spinner>
      )}
    </Box>
  );
};

export default UserDetails;
