import { Avatar, Box, Stack } from "@mui/material";
import React from "react";

const UserDetails = () => {
  return (
    <div>
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
        <Box>
          <Stack direction="row" spacing={2}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Stack>
        </Box>
      </div>
    </div>
  );
};

export default UserDetails;
