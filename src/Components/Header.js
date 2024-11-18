import React from "react";
import { TextField, IconButton } from "@mui/material";
import { Search, Chat, Notifications, EmojiEvents, AccountCircle } from "@mui/icons-material";

const Header = () => {
  return (
   < div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 20px",
        borderBottom: "1px solid #ddd",
        backgroundColor: "white",
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="https://cdn.sstatic.net/Sites/stackoverflow/Img/favicon.ico"
          alt="StackOverflow Logo"
          style={{ height: 30, marginRight: 10 }}
        />
        <span style={{ fontSize: "18px", fontWeight: "bold", color: "#f48024" }}>
          stack<span style={{ color: "black" }}>overflow</span>
        </span>
      </div>

      {/* Search bar */}
      <div style={{ flex: 1, marginLeft: 20, marginRight: 20 }}>
        <TextField
          placeholder="Search Your Answers Here..."
          variant="outlined"
          size="small"
          fullWidth
          InputProps={{
            endAdornment: (
              <IconButton>
                <Search />
              </IconButton>
            ),
          }}
        />
      </div>

      {/* Right-side icons */}
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        {/* Chat Icon */}
        <IconButton>
          <Chat />
        </IconButton>
        {/* Trophy Icon */}
        <IconButton>
          <EmojiEvents />
        </IconButton>
        {/* Notifications Icon */}
        <IconButton>
          <Notifications />
        </IconButton>
        {/* Profile Icon */}
        <IconButton>
          <AccountCircle />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
