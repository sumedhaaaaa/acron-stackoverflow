import React from "react";
import { AppBar, Toolbar, Typography, Box, InputBase, IconButton, Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MessageIcon from "@mui/icons-material/ChatBubbleOutline";
import TrophyIcon from "@mui/icons-material/EmojiEventsOutlined";
import NotificationIcon from "@mui/icons-material/NotificationsNone";

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#FFFFFF",
        padding: "10px 20px",
        boxShadow: "none",
        borderBottom: "2px solid #FF8A3C",
        borderRadius: "8px 8px 0 0",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo Section */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src="https://cdn.sstatic.net/Img/favicons/favicon.ico"
            alt="StackOverflow Logo"
            style={{ width: "30px", height: "30px" }}
          />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              color: "#000000",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            stack<strong>overflow</strong>
          </Typography>
        </Box>

        {/* Search Bar */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#F5F5F5",
            borderRadius: "20px",
            padding: "5px 15px",
            width: "50%",
          }}
        >
          <InputBase
            placeholder="Search Your Answers Here..."
            sx={{
              flex: 1,
              fontSize: "14px",
              color: "#757575",
            }}
          />
          <IconButton
            sx={{
              color: "#FF8A3C",
            }}
          >
            <SearchIcon />
          </IconButton>
        </Box>

        {/* Icons Section */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <IconButton sx={{ color: "#757575" }}>
            <MessageIcon />
          </IconButton>
          <IconButton sx={{ color: "#757575" }}>
            <TrophyIcon />
          </IconButton>
          <IconButton sx={{ color: "#757575" }}>
            <NotificationIcon />
          </IconButton>
          <Avatar
            alt="User Profile"
            src="https://i.pravatar.cc/300"
            sx={{ width: 32, height: 32 }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;