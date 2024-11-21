import React from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import {
  Home as HomeIcon,
  Public as PublicIcon,
  Star as CollectivesIcon,
  Work as JobsIcon,
  BusinessCenter as CompaniesIcon,
  GroupAdd as TeamsIcon,
} from '@mui/icons-material';

const Sidebar = () => {
  const activeTabStyle = {
    backgroundColor: '#FFF4EB', // Light orange background for active tab
    color: '#f48024', // Stack Overflow orange
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'left',
    marginBottom: '20px', // Increased spacing between active tab and next section
  };

  const rightBorderStyle = {
    borderRight: '5px solid #f48024', // Orange border for active tab
  };

  const sectionTitleStyle = {
    margin: '20px 0 10px', // More spacing between sections
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#666', // Subtle gray color
    textTransform: 'uppercase',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    height: '55px',
  };

  const subListStyle = {
    marginLeft: '35px', // Indentation for sub-items
    display: 'flex',
    flexDirection: 'column', // Arrange subitems vertically
    gap: '8px', // Add spacing between subitems
  };

  const sidebarContainer = {
    width: '200px',
    backgroundColor: '#FFFFFF', // White background
    height: '100vh',
    padding: '20px',
  };

  return (
    <div style={sidebarContainer}>
      <List>
        {/* Active Home Tab */}
        <Typography
          style={{
            ...activeTabStyle,
            ...rightBorderStyle,
            ...sectionTitleStyle,
          }}
        >
          <HomeIcon style={{ color: '#f48024' }} />
          HOME
        </Typography>

        {/* PUBLIC Section */}
        <Typography style={sectionTitleStyle}>
          <PublicIcon style={{ color: '#f48024' }} />
          PUBLIC
        </Typography>
        <div style={subListStyle}>
          <Typography variant='body2'>Questions</Typography>
          <Typography variant='body2'>Tags</Typography>
          <Typography variant='body2'>Users</Typography>
        </div>

        {/* COLLECTIVES Section */}
        <Typography style={sectionTitleStyle}>
          <CollectivesIcon style={{ color: '#f48024' }} />
          COLLECTIVES
        </Typography>
        <div style={subListStyle}>
          <Typography variant='body2'>Explore Jobs</Typography>
        </div>

        {/* FIND JOBS Section */}
        <Typography style={sectionTitleStyle}>
          <JobsIcon style={{ color: '#f48024' }} />
          FIND JOBS
        </Typography>
        <div style={subListStyle}>
          <Typography variant='body2'>Jobs</Typography>
          <Typography variant='body2'>Companies</Typography>
        </div>

        {/* TEAMS Section */}
        <Typography style={sectionTitleStyle}>
          <TeamsIcon style={{ color: '#f48024' }} />
          TEAMS
        </Typography>
        <div style={subListStyle}>
          <Typography variant='body2'>+ Create a team</Typography>
        </div>
      </List>
    </div>
  );
};

export default Sidebar;