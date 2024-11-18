import React from "react";
import { TextField, Button } from "@mui/material";

const Header = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px", borderBottom: "1px solid #ddd" }}>
      <TextField
        placeholder="Search your answers here..."
        variant="outlined"
        size="small"
        style={{ width: "70%" }}
      />
      <Button variant="contained" color="primary">
        Ask Question
      </Button>
    </div>
  );
};

export default Header;