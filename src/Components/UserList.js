import { Box } from "@mui/system";
import React from "react";
import ALlUsers from "./AllUsers";

const UserList = () => {
  return (
    <div className="container-UserList">
      <Box
        sx={{
          backgroundColor: "black",
          color: "white",
          padding: "10px 0",
          textAlign: "center",
        }}
      >
        <h1>User List</h1>
      </Box>
      <ALlUsers></ALlUsers>
    </div>
  );
};

export default UserList;
