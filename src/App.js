import React from 'react';

import Header from './components/Header';
import QuestionsList from './components/QuestionsList';
import RightSidebar from './components/RightSidebar';
import Sidebar from './components/Sidebar';
import QuestionsSection from './components/QuestionsSection';
import { Grid, Box } from '@mui/material';

function App() {
  return (
    <Grid
      container
      sx={{
        height: '100vh',
        backgroundColor: '#ffffff',
      }}
    >
      {/* Header */}
      <Grid
        item
        xs={12}
        sx={{
          backgroundColor: '#ffffff',
          padding: '10px',
        }}
      >
        <Header />
      </Grid>

      {/* Main Content */}
      <Grid
        container
        item
        xs={12}
        sx={{
          flexGrow: 1,
          overflow: 'hidden',
        }}
      >
        {/* Sidebar */}
        <Grid
          item
          xs={2} // Adjust this for sidebar width
          sx={{
            backgroundColor: '#ffffff',
            overflowY: 'auto',
          }}
        >
          <Sidebar />
        </Grid>

        {/* Middle Content */}
        <Grid
          item
          xs={7} // Adjust this for the middle content width
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            padding: '10px',
          }}
        >
          {/* Questions Section */}
          <Box
            sx={{
              backgroundColor: '#ffffff',
              padding: '10px',
            }}
          >
            <QuestionsSection />
          </Box>

          
        </Grid>

        {/* Right Sidebar */}
        <Grid
          item
          xs={3} 
          sx={{
            backgroundColor: '#ffffff',
            overflowY: 'auto',
            padding: '10px',
          }}
        >
          <RightSidebar />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;