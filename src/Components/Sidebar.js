import React from "react";
import { List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import {
  Home as HomeIcon,
  Public as PublicIcon,
  Star as CollectivesIcon,
  Work as JobsIcon,
  BusinessCenter as CompaniesIcon,
  GroupAdd as TeamsIcon,
} from "@mui/icons-material";

const Sidebar = () => {
  const activeTabStyle = {
    backgroundColor: "#FFF4EB", 
    color: "#f48024",          
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    padding: "10px 15px",
    marginBottom: "20px", 
  };

  const rightBorderStyle = {
    borderRight: "5px solid #f48024",
  };

  const sectionTitleStyle = {
    margin: "20px 0 10px", 
    fontSize: "14px",
    fontWeight: "bold",
    color: "#666",
    textTransform: "uppercase",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  const subListStyle = {
    marginLeft: "20px", 
    display: "flex",
    flexDirection: "column", 
    gap: "8px", 
  };

  const sidebarContainer = {
    width: "250px",
    backgroundColor: "#FFFFFF", 
    height: "100vh",
    padding: "20px",
    boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)", 
  };

  return (
    <div style={sidebarContainer}>
      <Typography variant="h6" style={{ color: "#f48024", marginBottom: "20px" }}>
        Stack Overflow
      </Typography>
      <List>
        {/* Active Home Tab */}
        <ListItem button style={{ ...activeTabStyle, ...rightBorderStyle }}>
          <ListItemIcon>
            <HomeIcon style={{ color: "#f48024" }} />
          </ListItemIcon>
          <ListItemText primary="Home" style={{ fontWeight: "bold" }} />
        </ListItem>

        {/* PUBLIC Section */}
        <Typography style={sectionTitleStyle}>
          <PublicIcon style={{ color: "#f48024" }} />
          PUBLIC
        </Typography>
        <div style={subListStyle}>
          <Typography variant="body2">Questions</Typography>
          <Typography variant="body2">Tags</Typography>
          <Typography variant="body2">Users</Typography>
        </div>

        {/* COLLECTIVES Section */}
        <Typography style={sectionTitleStyle}>
          <CollectivesIcon style={{ color: "#f48024" }} />
          COLLECTIVES
        </Typography>
        <div style={subListStyle}>
          <Typography variant="body2">Explore Jobs</Typography>
        </div>

        {/* FIND JOBS Section */}
        <Typography style={sectionTitleStyle}>
          <JobsIcon style={{ color: "#f48024" }} />
          FIND JOBS
        </Typography>
        <div style={subListStyle}>
          <Typography variant="body2">Jobs</Typography>
          <Typography variant="body2">Companies</Typography>
        </div>

        {/* TEAMS Section */}
        <Typography style={sectionTitleStyle}>
          <TeamsIcon style={{ color: "#f48024" }} />
          TEAMS
        </Typography>
        <div style={subListStyle}>
          <Typography variant="body2">+ Create a team</Typography>
        </div>
      </List>
    </div>
  );
};

export default Sidebar;