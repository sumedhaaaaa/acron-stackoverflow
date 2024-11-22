import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  InputBase,
  IconButton,
  Avatar,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MessageIcon from '@mui/icons-material/ChatBubbleOutline';
import TrophyIcon from '@mui/icons-material/EmojiEventsOutlined';
import NotificationIcon from '@mui/icons-material/NotificationsNone';

const Header = ({ handleSearch }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    handleSearch(query);
  }, [query]);

  return (
    <AppBar
      position='static'
      sx={{
        backgroundColor: '#FFFFFF',
        padding: '10px 20px',
        boxShadow: 'none',
        borderBottom: '2px solid #FF8A3C',
        borderRadius: '8px 8px 0 0',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Logo Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', }}>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Stack_Overflow_logo.svg/320px-Stack_Overflow_logo.svg.png'
            alt='StackOverflow Logo'
            style={{ width: '170px', height: '30px' }}
          />
        </Box>

        {/* Search Bar */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#F5F5F5',
            borderRadius: '20px',
            padding: '5px 15px',
            width: '50%',
          }}
        >
          <InputBase
            placeholder='Search Your Answers Here...'
            value={query}
            onChange={e => setQuery(e.target.value)}
            sx={{
              flex: 1,
              fontSize: '14px',
              color: '#757575',
            }}
          />
          <IconButton
            sx={{
              color: '#FF8A3C',
            }}
          >
            <SearchIcon />
          </IconButton>
        </Box>

        {/* Icons Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <IconButton sx={{ color: '#757575' }}>
            <MessageIcon />
          </IconButton>
          <IconButton sx={{ color: '#757575' }}>
            <TrophyIcon />
          </IconButton>
          <IconButton sx={{ color: '#757575' }}>
            <NotificationIcon />
          </IconButton>
          <Avatar
            alt='User Profile'
            src='https://i.pravatar.cc/300'
            sx={{ width: 32, height: 32 }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;