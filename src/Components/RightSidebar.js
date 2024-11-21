import React from "react";
import { Box, Typography, Divider, List, ListItem, ListItemIcon, ListItemText, TextField } from "@mui/material";
import { Create as BlogIcon, FeaturedPlayList as MetaIcon } from "@mui/icons-material";

const RightSidebar = () => {
  const sectionContainerStyle = {
    marginBottom: "20px",
  };

  const sectionHeaderStyle = {
    fontWeight: "bold",
    marginBottom: "10px",
    fontSize: "16px",
  };

  const listItemStyle = {
    paddingLeft: "0",
  };

  const customFilterStyle = {
    marginTop: "20px",
  };

  return (
    <Box
      sx={{
        width: "300px",
        backgroundColor: "#FFFFFF",
        padding: "20px",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
      }}
    >
      {/* The Overflow Blog */}
      <Box sx={sectionContainerStyle}>
        <Typography sx={sectionHeaderStyle}>The Overflow Blog</Typography>
        <List>
          <ListItem sx={listItemStyle}>
            <ListItemIcon>
              <BlogIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="The unexpected benefits of mentoring others"
              primaryTypographyProps={{ fontSize: "14px", color: "#333" }}
            />
          </ListItem>
          <ListItem sx={listItemStyle}>
            <ListItemIcon>
              <BlogIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="Podcast 354: Building for AR with Niantic Labs’ augmented reality SDK"
              primaryTypographyProps={{ fontSize: "14px", color: "#333" }}
            />
          </ListItem>
        </List>
      </Box>

      <Divider />

      {/* Featured & Meta */}
      <Box sx={sectionContainerStyle}>
        <Typography sx={sectionHeaderStyle}>Featured & Meta</Typography>
        <List>
          <ListItem sx={listItemStyle}>
            <ListItemIcon>
              <MetaIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="Beta release of Collectives™ on Stack Overflow"
              primaryTypographyProps={{ fontSize: "14px", color: "#333" }}
            />
          </ListItem>
        </List>
      </Box>

      <Divider />

      {/* Hot Meta Posts */}
      <Box sx={sectionContainerStyle}>
        <Typography sx={sectionHeaderStyle}>Hot meta post</Typography>
        <List>
          <ListItem sx={listItemStyle}>
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", color: "#333", marginRight: "10px" }}
            >
              8
            </Typography>
            <Typography variant="body2" sx={{ color: "#333" }}>
              Tags [driver] and [device-driver] appear to be redundant
            </Typography>
          </ListItem>
          <ListItem sx={listItemStyle}>
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", color: "#333", marginRight: "10px" }}
            >
              27
            </Typography>
            <Typography variant="body2" sx={{ color: "#333" }}>
              How to handle dupes where A is closed as dup of B but I have an
              answer that...
            </Typography>
          </ListItem>
          <ListItem sx={listItemStyle}>
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", color: "#333", marginRight: "10px" }}
            >
              27
            </Typography>
            <Typography variant="body2" sx={{ color: "#333" }}>
              Ambiguous tag [containers]
            </Typography>
          </ListItem>
        </List>
      </Box>

      <Divider />

      {/* Custom Filter */}
      <Box sx={customFilterStyle}>
        <Typography sx={sectionHeaderStyle}>Custom filter</Typography>
        <TextField
          placeholder="add custom filters"
          variant="outlined"
          fullWidth
          size="small"
        />
      </Box>
    </Box>
  );
};

export default RightSidebar;